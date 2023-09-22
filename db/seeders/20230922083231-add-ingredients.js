/** @type {import('sequelize-cli').Migration} */

const { Recipe } = require('../models');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Ingredients',
      [
        {
          ingredientname: 'творог',
          recipeId: await Recipe.findOne({
            where: { recipename: 'Запеканка' },
          }).then((recipe) => recipe.id),
        },
        {
          ingredientname: 'свекла',
          recipeId: await Recipe.findOne({
            where: { recipename: 'Борщ' },
          }).then((recipe) => recipe.id),
        },
        {
          ingredientname: 'тесто',
          recipeId: await Recipe.findOne({
            where: { recipename: 'Пельмени' },
          }).then((recipe) => recipe.id),
        },
        {
          ingredientname: 'мука',
          recipeId: await Recipe.findOne({
            where: { recipename: 'Блины' },
          }).then((recipe) => recipe.id),
        },
        {
          ingredientname: 'колбаса',
          recipeId: await Recipe.findOne({
            where: { recipename: 'Оливье' },
          }).then((recipe) => recipe.id),
        },
        {
          ingredientname: 'мясо',
          recipeId: await Recipe.findOne({
            where: { recipename: 'Шашлык' },
          }).then((recipe) => recipe.id),
        },
        {
          ingredientname: 'ананасы',
          recipeId: await Recipe.findOne({
            where: { recipename: 'Пицца' },
          }).then((recipe) => recipe.id),
        },
        {
          ingredientname: 'фарш',
          recipeId: await Recipe.findOne({
            where: { recipename: 'Лазанья' },
          }).then((recipe) => recipe.id),
        },
        {
          ingredientname: 'Маскарпоне',
          recipeId: await Recipe.findOne({
            where: { recipename: 'Тирамису' },
          }).then((recipe) => recipe.id),
        },
        {
          ingredientname: 'какао',
          recipeId: await Recipe.findOne({
            where: { recipename: 'Тирамису' },
          }).then((recipe) => recipe.id),
        },
        {
          ingredientname: 'кабачки',
          recipeId: await Recipe.findOne({
            where: { recipename: 'Рататуй' },
          }).then((recipe) => recipe.id),
        },
        {
          ingredientname: 'чеснок',
          recipeId: await Recipe.findOne({
            where: { recipename: 'Рататуй' },
          }).then((recipe) => recipe.id),
        },
        {
          ingredientname: 'баклажан',
          recipeId: await Recipe.findOne({
            where: { recipename: 'Рататуй' },
          }).then((recipe) => recipe.id),
        },
        {
          ingredientname: 'помидор',
          recipeId: await Recipe.findOne({
            where: { recipename: 'Рататуй' },
          }).then((recipe) => recipe.id),
        },
        {
          ingredientname: 'креветки',
          recipeId: await Recipe.findOne({
            where: { recipename: 'Паэлья' },
          }).then((recipe) => recipe.id),
        },
        {
          ingredientname: 'рис',
          recipeId: await Recipe.findOne({
            where: { recipename: 'Паэлья' },
          }).then((recipe) => recipe.id),
        },
        {
          ingredientname: 'мидии',
          recipeId: await Recipe.findOne({
            where: { recipename: 'Паэлья' },
          }).then((recipe) => recipe.id),
        },
        {
          ingredientname: 'кальмары',
          recipeId: await Recipe.findOne({
            where: { recipename: 'Паэлья' },
          }).then((recipe) => recipe.id),
        },
        {
          ingredientname: '',
          recipeId: await Recipe.findOne({
            where: { recipename: 'Суши' },
          }).then((recipe) => recipe.id),
        },
        {
          ingredientname: 'мясо',
          recipeId: await Recipe.findOne({
            where: { recipename: 'Гуляш' },
          }).then((recipe) => recipe.id),
        },
        {
          ingredientname: 'лук',
          recipeId: await Recipe.findOne({
            where: { recipename: 'Гуляш' },
          }).then((recipe) => recipe.id),
        },
        {
          ingredientname: 'сыр',
          recipeId: await Recipe.findOne({
            where: { recipename: 'Фондю' },
          }).then((recipe) => recipe.id),
        },
        {
          ingredientname: 'хлеб',
          recipeId: await Recipe.findOne({
            where: { recipename: 'Фондю' },
          }).then((recipe) => recipe.id),
        },
        {
          ingredientname: 'шоколад',
          recipeId: await Recipe.findOne({
            where: { recipename: 'Шоколадный торт' },
          }).then((recipe) => recipe.id),
        },
        {
          ingredientname: 'сливочное масло',
          recipeId: await Recipe.findOne({
            where: { recipename: 'Шоколадный торт' },
          }).then((recipe) => recipe.id),
        },
        {
          ingredientname: 'мука',
          recipeId: await Recipe.findOne({
            where: { recipename: 'Шоколадный торт' },
          }).then((recipe) => recipe.id),
        },
        {
          ingredientname: 'курица',
          recipeId: await Recipe.findOne({
            where: { recipename: 'Салат Цезарь' },
          }).then((recipe) => recipe.id),
        },
        {
          ingredientname: 'помидор',
          recipeId: await Recipe.findOne({
            where: { recipename: 'Салат Цезарь' },
          }).then((recipe) => recipe.id),
        },
        {
          ingredientname: 'салат',
          recipeId: await Recipe.findOne({
            where: { recipename: 'Салат Цезарь' },
          }).then((recipe) => recipe.id),
        },
        {
          ingredientname: 'заправка',
          recipeId: await Recipe.findOne({
            where: { recipename: 'Салат Цезарь' },
          }).then((recipe) => recipe.id),
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
