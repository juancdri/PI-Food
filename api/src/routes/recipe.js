const { Router } = require('express');
const { Recipe, Type } = require('../db');
const { default: axios } = require('axios');
const { YOUR_API_KEY } = process.env;
const { URL_INFO, URL_RECIPE } = require('../utils/path.js');

const route = Router();

route.get('/', async (req, res) => {
    let { name } = req.query;
    //  Obtener un listado de las primeras 9 recetas que contengan la palabra ingresada como query paraeter
    //  Si no existe ninguna receta mostrar un mensaje adecuado
    var box = await axios.get(`${URL_RECIPE}?apiKey=${YOUR_API_KEY}&number=100&addRecipeInformation=true`)

    var recetas = box.data.results
    var recetas1 = recetas.map((ee) => ({
        id: ee.id,
        title: ee.title,
        image: ee.image,
        diets: ee.diets,
        dishTypes: ee.dishTypes,
        summary: ee.summary,
        healthScore: ee.healthScore,
        spoonacularScore: ee.spoonacularScore,
        analyzedInstructions: ee.analyzedInstructions
    }))
    //cargar estos datos en la db para no tener problemas con la busqueda en la api externa

    var dbRecetas = await Recipe.findAll({ include: [Type] })

    var todas = [...dbRecetas, ...recetas1]

    if (name === undefined) {
            return res.json(todas)

    } else if (name) {
        const lista = todas.filter(e => e.title.toUpperCase().includes(name.toUpperCase()))
        const list = lista.slice(0, 9)
        if (list.length) {
            res.json(list)
        } else { res.status(400).send('No existe ninguna receta relacionada') }
    }


});

route.get('/:id', async (req, res) => {

    //  Obtener el detalle de una receta en particular
    // Debe traer solo los datos pedidos en la ruta de detalle de receta
    // Incluir los tipos de dieta asociados
let {id} = req.params
  try {
    const response= await axios.get(`${URL_INFO}/${id}/information?apiKey=${YOUR_API_KEY}`)
    const ee= response.data
    // const games = await response.data
    const receta = {
        id: ee.id,
        title: ee.title,
        image: ee.image,
        diets: ee.diets,
        dishTypes: ee.dishTypes,
        summary: ee.summary,
        healthScore: ee.healthScore,
        spoonacularScore: ee.spoonacularScore,
        analyzedInstructions: (ee.analyzedInstructions.length > 0) ? ee.analyzedInstructions[0].steps.map(e => e.step) : ["No hay datos"]
    }
    // console.log(games)
    return res.send(receta);
    // return res.send(response.data);
    } catch (error) {
    if(error.response?.status === 404) {
      const receta = await Recipe.findAll({
        include:{
          model: Type,
          attributes: ['id','name'],
          through:{
              attributes:[],
          }
        }
      });
      const filtered = await receta.filter( e => e.id === id).shift()
      return res.json(filtered);
    }
    return res.status(500).json({error: 'Sorry... id not found'})
  }
});

route.post('/', async (req, res) => {
    //     Recibe los datos recolectados desde el formulario controlado de la ruta de creación de recetas por body
    // Crea una receta en la base de datos
    const { title, summary, spoonacularScore, healthScore, analyzedInstructions, diets } = req.body;

    if (title && summary) {
        const recetaCreada = await Recipe.create({
            title,
            summary,
            spoonacularScore,
            healthScore,
            analyzedInstructions,

        })

        await recetaCreada.setTypes(diets) //acordate que aca iba type
        return res.send(recetaCreada);
    }
    else { return res.status(404).send('Error') }

})




module.exports = route;