/** @type {import('sequelize-cli').Migration} */

import axios from 'axios';

module.exports = {
  async up(queryInterface, Sequelize) {
    // const imageResponse = await axios.get('/images/media/meals/llcbn01574260722.jpg/preview');
    const ingredientsResponse = await axios.get('www.themealdb.com/api/json/v1/1/list.php?c=lis');
    // const images = imageResponse.data.map((item) => ({
    //   url: item.url,
    // }));

    const ingredients = ingredientsResponse.data.map((item) => ({
      name: item.name,
    }));

    // await queryInterface.bulkInsert('Images', images, {});
    await queryInterface.bulkInsert('Ingredients', ingredients, {});
  },

  async down(queryInterface, Sequelize) {
    // await queryInterface.bulkDelete('Images', null, {});
    await queryInterface.bulkDelete('Ingredients', null, {});
  },
};
