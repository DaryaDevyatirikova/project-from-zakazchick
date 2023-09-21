


module.exports = {
  async up(queryInterface, Sequelize) {
    // const imageResponse = await axios.get(
    //   'https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg/preview',
    // );
    // const images = imageResponse.data.map((item) => ({
    //   url: item.url,
    // }));

    await queryInterface.bulkInsert('Images', images, {});

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
    await queryInterface.bulkDelete('Recipes', null, {});
    await queryInterface.bulkDelete('Images', null, {});
  },
};
