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
        {
          recipename: 'Борщ',
          image: 'https://gotovim-doma.ru/images/recipe/2/91/29147-recipe-main.jpg',
          description: 'Традиционный русский суп с красной свёклой и мясом',
          time: '2 часа',
        },
        {
          recipename: 'Пельмени',
          image: 'https://gotovim-doma.ru/images/recipe/1/78/1878-recipe-main.jpg',
          description: 'Мясные изделия в тесте, обычно варятся и подаются с сметаной',
          time: '1 час',
        },
        {
          recipename: 'Блины',
          image: 'https://gotovim-doma.ru/images/recipe/1/73/1073-recipe-main.jpg',
          description: 'Тонкие панкейки, которые можно подавать с различными начинками',
          time: '30 минут',
        },
        {
          recipename: 'Оливье',
          image: 'https://gotovim-doma.ru/images/recipe/1/76/1076-recipe-main.jpg',
          description: 'Традиционный русский салат с картошкой, морковью, горошком и колбасой',
          time: '1 час',
        },
        {
          recipename: 'Шашлык',
          image: 'https://gotovim-doma.ru/images/recipe/1/76/1076-recipe-main.jpg',
          description: 'Мясо, маринованное в специях и вареное на открытом огне',
          time: '3 часа',
        },
        {
          recipename: 'Пицца',
          image: 'https://gotovim-doma.ru/images/recipe/1/76/1076-recipe-main.jpg',
          description: 'Итальянское блюдо с тестом, соусом, сыром и различными начинками',
          time: '1 час',
        },
        {
          recipename: 'Лазанья',
          image: 'https://gotovim-doma.ru/images/recipe/1/76/1076-recipe-main.jpg',
          description: 'Итальянское блюдо из слоёв теста, мясного соуса и сыра',
          time: '1 час',
        },
        {
          recipename: 'Тирамису',
          image: 'https://gotovim-doma.ru/images/recipe/1/76/1076-recipe-main.jpg',
          description: 'Итальянский десерт из сыра маскарпоне, кофе и печенья савоярди',
          time: '30 минут',
        },
        {
          recipename: 'Рататуй',
          image: 'https://gotovim-doma.ru/images/recipe/1/76/1076-recipe-main.jpg',
          description: 'Французское блюдо из овощей, запечённых в духовке',
          time: '1 час',
        },
        {
          recipename: 'Паэлья',
          image: 'https://gotovim-doma.ru/images/recipe/1/76/1076-recipe-main.jpg',
          description: 'Испанское блюдо из риса с морепродуктами и овощами',
          time: '1 час',
        },
        {
          recipename: 'Суши',
          image: 'https://gotovim-doma.ru/images/recipe/1/76/1076-recipe-main.jpg',
          description: 'Японское блюдо из риса, рыбы и водорослей',
          time: '1 час',
        },
        {
          recipename: 'Гуляш',
          image: 'https://gotovim-doma.ru/images/recipe/1/76/1076-recipe-main.jpg',
          description: 'Венгерское блюдо из мяса, варёного с овощами и специями',
          time: '2 часа',
        },
        {
          recipename: 'Фондю',
          image: 'https://gotovim-doma.ru/images/recipe/1/76/1076-recipe-main.jpg',
          description: 'Швейцарское блюдо из расплавленного сыра, в который макают кусочки хлеба',
          time: '30 минут',
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Recipes', null, {});
  },
};
