const { default: axios } = require('axios');
const { API_KEY_1, API_KEY_2, API_KEY_3, API_KEY_4, API_KEY_5, YOUR_API_KEY } = process.env;
const { URL_INFO } = require('../utils/path.js');

var index = 0
var apiKey
const searchApiID = async (id) => {
    switch (index) {
        case 1: apiKey = API_KEY_1; break;
        case 2: apiKey = API_KEY_2; break;
        case 3: apiKey = API_KEY_3; break;
        case 4: apiKey = API_KEY_4; break;
        case 5: apiKey = API_KEY_5; break;
        case 6: apiKey = YOUR_API_KEY; break;
        default: apiKey = API_KEY_1; break;
    }
    try {
        const response = await axios.get(`${URL_INFO}/${id}/information?apiKey=${apiKey}`)
        console.log(response.data)
        const e = response.data
        const recipe = {
            id: e.id,
            title: e.title,
            image: e.image,
            diets: e.diets,
            dishTypes: e.dishTypes,
            summary: e.summary,
            healthScore: e.healthScore,
            spoonacularScore: e.spoonacularScore,
            analyzedInstructions: e.analyzedInstructions.map(data => data.steps.map(how => { return { number: how.number, instruction: how.step } }))[0]
        }
        console.log()
        return recipe;
    }
    catch (error) {
        if (index >= 6) {
            index = 1;
        } else {
            index++
        }
        return [index];
    };
}
module.exports = {
    searchApiID
}