const axios = require('axios').default;

const { API_KEY_1, API_KEY_2, API_KEY_3, API_KEY_4, API_KEY_5, YOUR_API_KEY } = process.env;

var index = 1;
var apiKey;

//BUSCAR UNA LISTADO DE RESETAS completas
const getApiInfo = async () => {
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
        const recipeApi = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&addRecipeInformation=true&number=99`)
        const recipe = recipeApi.data.results;
        return recipe.map(e => {
            return {
                id: e.id,
                title: e.title,
                summary: e.summary,
                image: e.image,
                analyzedInstructions: e.analyzedInstructions,
                score: e.healthScore,
                diets: e.diets,
                dishTypes: e.dishTypes,
            }
        })
    } catch (error) {
        //console.log(error,'error requestApi', index)
        if (index >= 6) {
            index = 1;
        } else {
            index++
        }
        return [index];
    };
}


module.exports = {
    getApiInfo
}
