/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Recipes',
      [
        {
          recipename: 'Запеканка',
          image: 'https://karamellka.ru/wp-content/uploads/2017/10/tvorozhnaya-zapekanka-foto.jpg',
          description: 'Можно купить в магазине и будет вкусно',
          time: '2 секунды',
        },
        {
          recipename: 'НеЗапеканка',
          image: 'https://karamellka.ru/wp-content/uploads/2017/10/tvorozhnaya-zapekanka-foto.jpg',
          description: 'Можно купить в магазине и будет вкусно',
          time: '2 секунды',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
