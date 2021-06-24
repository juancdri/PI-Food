const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: { //TEXT
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: { //sumary
      type: DataTypes.STRING,
      allowNull: false
    },
    spoonacularScore:{ //spoonacularScore
      type: DataTypes.STRING
    },
    healthScore:{
      type: DataTypes.STRING
    },
    analyzedInstructions:{ // es una url sourceUrl
      type: DataTypes.JSON,
    }

  });
};
