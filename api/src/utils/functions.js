const {
    searchDBInfo,
    searchApiID,
    allRecipes
} = require('../controllers/index')
const { Recipe, Type } = require('../db');

const searchName = async () => {
    const recipe = await allRecipes()
    const lista = recipe.filter(e => e.title.toUpperCase().includes(name.toUpperCase()))
    const list = lista.slice(0, 9)
    if (list.length) {
        return list
    } return false

}
const searchId = async (id) => {
    const search = await searchApiID()
    if (search) { return search }

    const db = await searchDBInfo()
    const searchDB = db.find(e => e.id === id)
    if (db) { return searchDB }
}

const searchAll = async () => {
    const allsearch = await allRecipes()
    return allsearch
}

const searchType = async () => {
    const dietType = await Type.findAll()
    return dietType
}

createRecipe = async (title, summary, spoonacularScore, healthScore, analyzedInstructions, diets) => {
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
}

createDiet = async (diet) => {
    const newDiet = diet[0].toUpperCase() + diet.slice(1);
    const findDiet = await Type.findOne({
        where: {
            title: newDiet
        }
    })
    if (!findDiet) {
        const dietCreate = await Type.create({
            name: newDiet
        })
        return dietCreate
    }
    //console.log(findDiet[0].dataValues)
    return findDiet;
}

const searchByDiet = async (diet) => {
    const recipes = await recipeAll();

    const recipeFilter = recipes.filter(recipe => {
        let check = false;
        recipe.diets.forEach(el => {
            if (el.toLowerCase().includes(diet.toLowerCase())) {
                check = true
            }
        })
        return check
    })
    //console.log(recipeFilter.length, 'recipesFilter')
    return recipeFilter;
}

module.exports={
    searchName,
    searchId,
    searchType,
    searchAll,
    createRecipe,
    createDiet,
    searchByDiet
 }