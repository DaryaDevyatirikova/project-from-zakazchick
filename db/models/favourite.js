const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Favourite extends Model {
    static associate({ User, Recipe }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Recipe, { foreignKey: 'recipeId' });
    }
  }
  Favourite.init(
    {
      userId: DataTypes.INTEGER,
      recipeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Favourite',
    },
  );
  return Favourite;
};
