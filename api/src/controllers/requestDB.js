const { Recipe, Type } = require('../db');

const getBdInfo = async () => {
    try {
        const dbRecetas = await Recipe.findAll({ include: [Type] })
        return dbRecetas
    } catch (error) {
        console.log(error)
        return [];
    };

}

module.exports = { getBdInfo }