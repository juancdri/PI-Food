const { getApiInfo } = require('./requestApi')
const { getBdInfo } = require('./requestDB')




const allRecipes = async () => {
    const apiRecipes = await getApiInfo()
    const dbRecipes = await getBdInfo()
    const recipes = [...apiRecipes, ...dbRecipes]
    
    return recipes
}
module.exports = {
    allRecipes
}