const { default: axios } = require('axios');
const { API_KEY_1, API_KEY_2, API_KEY_3, API_KEY_4, API_KEY_5 } = process.env;



const searchAll = async () => {
    var index = 1
    var YOUR_API_KEY
    switch (index) {
        case 1: YOUR_API_KEY = API_KEY_1; break;
        case 2: YOUR_API_KEY = API_KEY_2; break;
        case 3: YOUR_API_KEY = API_KEY_3; break;
        case 4: YOUR_API_KEY = API_KEY_4; break;
        case 5: YOUR_API_KEY = API_KEY_5; break;
        default: YOUR_API_KEY = API_KEY_1; break;
    }


    const recipeApi = await axios.get(`${URL_RECIPE}?apiKey=${YOUR_API_KEY}&number=100&addRecipeInformation=true`)
    var recipe = recipeApi.data.results
    var recetas1 = recipe.map((ee) => ({
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

    var dbRecetas = await Recipe.findAll({ include: [Type] })

    var todas = [...dbRecetas, ...recetas1]


    return res.json(todas)

}

const searchByName = await(name) => {

}