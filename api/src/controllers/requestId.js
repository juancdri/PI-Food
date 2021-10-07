const { default: axios } = require('axios');
const { API_KEY_1, API_KEY_2, API_KEY_3, API_KEY_4, API_KEY_5 } = process.env;
const { URL_INFO, URL_RECIPE } = require('../utils/path.js');

var index = 0
var YOUR_API_KEY
const searchApiID = async (id) => {
    switch (index) {
        case 1: YOUR_API_KEY = API_KEY_1; break;
        case 2: YOUR_API_KEY = API_KEY_2; break;
        case 3: YOUR_API_KEY = API_KEY_3; break;
        case 4: YOUR_API_KEY = API_KEY_4; break;
        case 5: YOUR_API_KEY = API_KEY_5; break;
        default: YOUR_API_KEY = API_KEY_1; break;
    }
    apiKeys = [API_KEY_1, API_KEY_2, API_KEY_3, API_KEY_4, API_KEY_5]
    try {
        var recipe = {}
        while (Object.keys(recipe).length === 0) {
            const response = await axios.get(`${URL_INFO}/${id}/information?apiKey=${apiKeys[i]}`)
            const e = response.data
            Object.keys(recipe).length !== 0
            ?recipe = {
                id: e.id,
                title: e.title,
                image: e.image,
                diets: e.diets,
                dishTypes: e.dishTypes,
                summary: e.summary,
                healthScore: e.healthScore,
                spoonacularScore: e.spoonacularScore,
                analyzedInstructions: e.analyzedInstructions.map(data => data.map(how => { return { number: how.number, instruction: how.step } }))
            }
            :index++
        }
        return recipe;
    } catch (error) {
        console.error(error)
        res.status(400).send('No existe ninguna receta relacionada', error)
    };
}
module.exports = {
    searchApiID
}