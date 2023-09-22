/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Ingredients',
      [
        {
          ingredientname: 'John Doe',
          recipeId: 1,
        },
        {
          ingredientname: 'dfsd',
          recipeId: 1,
        },
        {
          ingredientname: 'J',
          recipeId: 2,
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
