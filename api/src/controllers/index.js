const searchApiData = require('./requestApi')
const searchDBInfo = require('./requestDB')
const searchApiID = require('./requestId')

const allRecipes = async ()=>{
    const apiRecipes= await searchApiData()
    const dbRecipes= await searchDBInfo()
    const recipes = [...apiRecipes, ...dbRecipes]

    return recipes
}
module.exports = {
    searchApiData,
    searchDBInfo,
    searchApiID,
    allRecipes
}