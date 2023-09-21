const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Favourite, Recipe }) {
      // this.hasMany(Favourite, { foreignKey: 'userId' });
      this.belongsToMany(Recipe, { through: 'Favourites', foreignKey: 'userId', as: 'fav' });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      hashpass: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
