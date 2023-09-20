'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {

    static associate({Ingredient,Favourite}) {
     this.hasMany(Favourite,{foreignKey:'recipeId'})
     this.hasMany(Ingredient,{foreignKey:'recipeId'})

    }
  }
  Recipe.init({
    recipename: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.TEXT,
    time: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};