'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    
    static associate({Recipe}) {
      this.belongsTo(Recipe,{foreignKey:'recipeId'})
    }
  }
  Ingredient.init({
    ingredientname: DataTypes.STRING,
    recipeId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Ingredient',
  });
  return Ingredient;
};