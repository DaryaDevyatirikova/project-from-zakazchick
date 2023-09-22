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
          recipename: 'Борщ',
          image: 'https://2recepta.com/recept/borshh/borshh.jpg',
          description: 'Традиционный русский суп с красной свёклой и мясом',
          time: '2 часа',
        },
        {
          recipename: 'Пельмени',
          image: 'https://e1.edimdoma.ru/data/posts/0002/5167/25167-ed4_wide.jpg?1656675307',
          description: 'Мясные изделия в тесте, обычно варятся и подаются с сметаной',
          time: '1 час',
        },
        {
          recipename: 'Блины',
          image: 'https://static.vkusnyblog.com/full/uploads/2021/03/tolstye-bliny-na-kefire.jpg',
          description: 'Тонкие панкейки, которые можно подавать с различными начинками',
          time: '30 минут',
        },
        {
          recipename: 'Оливье',
          image: 'https://www.gastronom.ru/binfiles/images/20220112/bddaa5f7.jpg',
          description: 'Традиционный русский салат с картошкой, морковью, горошком и колбасой',
          time: '1 час',
        },
        {
          recipename: 'Шашлык',
          image:
            'https://www.chefmarket.ru/blog/wp-content/uploads/2019/07/kebabhome-e1563827694229.jpg',
          description: 'Мясо, маринованное в специях и вареное на открытом огне',
          time: '3 часа',
        },
        {
          recipename: 'Пицца',
          image: 'https://cdn.lifehacker.ru/wp-content/uploads/2020/10/20_1603457923-1280x640.jpg',
          description: 'Итальянское блюдо с тестом, соусом, сыром и различными начинками',
          time: '1 час',
        },
        {
          recipename: 'Лазанья',
          image: 'https://e2.edimdoma.ru/data/posts/0002/1714/21714-ed4_wide.jpg?1637066936',
          description: 'Итальянское блюдо из слоёв теста, мясного соуса и сыра',
          time: '1 час',
        },
        {
          recipename: 'Тирамису',
          image: 'https://www.maggi.ru/data/images/recept/img640x618/recept_24520_7pic.jpg',
          description: 'Итальянский десерт из сыра маскарпоне, кофе и печенья савоярди',
          time: '30 минут',
        },
        {
          recipename: 'Рататуй',
          image: 'https://img.delo-vcusa.ru/2019/11/Ratatuy-iz-baklazhanov.jpg',
          description: 'Французское блюдо из овощей, запечённых в духовке',
          time: '1 час',
        },
        {
          recipename: 'Паэлья',
          image: 'https://s1.eda.ru/StaticContent/Photos/120130134334/120213175336/p_O.jpg',
          description: 'Испанское блюдо из риса с морепродуктами и овощами',
          time: '1 час',
        },
        {
          recipename: 'Суши',
          image:
            'https://n1s1.hsmedia.ru/3b/b9/2e/3bb92eb5c0243f41c8f0fd14044619cd/1861x1387_0xac120003_1225909181634638355.jpeg',
          description: 'Японское блюдо из риса, рыбы и водорослей',
          time: '1 час',
        },
        {
          recipename: 'Гуляш',
          image:
            'https://myastoriya.com.ua/upload/resize_cache/iblock/429/1000_800_1/42974efcbc0cb203592e4c2197ad1ef6.jpg',
          description: 'Венгерское блюдо из мяса, варёного с овощами и специями',
          time: '2 часа',
        },
        {
          recipename: 'Фондю',
          image:
            'https://n1s1.hsmedia.ru/8b/8a/7a/8b8a7abdac88b90ef559d6ac3446be8b/1000x745_0xac120003_9272639891562646659.jpg',
          description: 'Швейцарское блюдо из расплавленного сыра, в который макают кусочки хлеба',
          time: '30 минут',
        },
        {
          recipename: 'Шоколадный торт',
          image: 'https://aif-s3.aif.ru/images/009/987/002d5e930aab5f9ba840f374a3e142aa.jpg',
          description: 'Вкусный и сытный десерт для любителей шоколада',
          time: '2 часа',
        },
        {
          recipename: 'Салат Цезарь',
          image: 'https://ferma-m2.ru/images/shop/recipe_image/crop_shutterstock_1505620307.jpg',
          description: 'Популярный салат с курицей, сыром пармезан и специальным соусом',
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
