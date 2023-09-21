const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    static associate({ Ingredient, User }) {
      // this.hasMany(Favourite, { foreignKey: 'recipeId' });
      this.hasMany(Ingredient, { foreignKey: 'recipeId' });
      this.belongsToMany(User, { through: 'Favourites', foreignKey: 'recipeId', as: 'fav' });
    }
  }
  Recipe.init(
    {
      recipename: DataTypes.STRING,
      image: DataTypes.STRING,
      description: DataTypes.TEXT,
      time: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Recipe',
    },
  );
  return Recipe;
};
