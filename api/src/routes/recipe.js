const { Router } = require('express');
const { Recipe, Type } = require('../db');
const { default: axios } = require('axios');
const { YOUR_API_KEY } = process.env;
const { URL_INFO, URL_RECIPE } = require('../utils/path.js');
const {
  searchName,
  searchId,
  searchType,
  searchAll,
  createRecipe,
  createDiet,
  searchByDiet
} = require('../utils/functions')
const route = Router();

route.get('/', async (req, res) => {
  let { name } = req.query;
  console.log(name)
  if (name) {
    try {
      const lista = await searchName(name)
      const list = lista.slice(0, 9)
      return res.json(list)
    }
    catch (error) {
      return res.status(404).send('No existe ninguna receta relacionada')
    }
  }
  else {
    try {
      const all = await searchAll()
      return res.json(all)
    }
    catch (error) {
      return res.status(400).send('No hay recetas')
    }
  }

});


route.get('/:id', async (req, res, next) => {

  let { id } = req.params

  const recipeId = await searchId(id)
  console.log(recipeId)
  if (recipeId) {
    return res.json(recipeId)
  }
  return res.status(404).json('El id no es válido')


});

route.post('/', async (req, res) => {
  const { title, summary, spoonacularScore, healthScore, analyzedInstructions, diets } = req.body;

  if (title && summary) {
    const recetaCreada = await Recipe.create({
      title,
      summary,
      spoonacularScore,
      healthScore,
      analyzedInstructions,

    })

    await recetaCreada.setTypes(diets)
    return res.send(recetaCreada);
  }
  else { return res.status(404).send('Error') }

})




module.exports = route;