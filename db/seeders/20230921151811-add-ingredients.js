/** @type {import('sequelize-cli').Migration} */

const axios =require('axios');

module.exports = {
  async up(queryInterface, Sequelize) {
    const ingredientsResponse = await axios.get('www.themealdb.com/api/json/v1/1/list.php?c=lis');
    const ingredients = ingredientsResponse.data.map((item) => ({
      name: item.name,
    }));

    await queryInterface.bulkInsert('Ingredients', ingredients, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Ingredients', null, {});
  },
};
