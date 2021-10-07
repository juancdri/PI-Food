import { Recipe, Type } from '../db'


const searchDBInfo = async () =>{
    try{
    const dbRecetas = await Recipe.findAll({ include: [Type] })

    const dbRecetas = recipeAll.map(e=>{
        return {
            id: e.id,
            name: e.name,
            summary: e.summary,
            score: e.score,
            instructions: e.instructions,
            image:e.image,
            diets: e.diets.map(diet => diet.title)
        }
    })
     return dbRecetas
    }catch (error) {
        return false;
    };

}
module.exports={
    searchDBInfo
 }