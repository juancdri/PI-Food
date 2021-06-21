const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    title: { //TEXT
      type: DataTypes.TEXT,
      allowNull: false,
    },
    summary: { //sumary
      type: DataTypes.TEXT,
      allowNull: false
    },
    spoonacularScore:{ //spoonacularScore
      type: DataTypes.FLOAT
    },
    healthScore:{
      type: DataTypes.FLOAT
    },
    analyzedInstructions:{ // es una url sourceUrl
      type: DataTypes.TEXT,
    }

  });
};
