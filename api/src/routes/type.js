const {Router}= require('express');
const {Type} = require('../db');
const { default: axios } = require('axios');
const {YOUR_API_KEY}= process.env;
const{URL_RECIPE, RECIPE_INFO}= require('../utils/path');

const route = Router();

route.get('/', async(req, res)=>{
//     Obtener todos los tipos de dieta posibles
// En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con los tipos de datos indicados por spoonacular acá(link)
let allRecipes = await Type.findAll();
	return res.send(allRecipes);
})

module.exports = route;