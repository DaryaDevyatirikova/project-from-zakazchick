import express from 'express';
import { Favourite, Recipe, User, Ingredient } from '../../../db/models';
import { where } from 'sequelize';

const router = express.Router();

router.get('/', async (req, res) => {
  const { user } = req.session;

  if (!user) {
    const recipeList = await Recipe.findAll();
    res.json(recipeList);
    return;
  }
  const recipeList = await Recipe.findAll({
    include: {
      model: User,
      attributes: ['id'],
      as: 'fav',
    },
  });

  res.json(recipeList);
});

router.post('/:cardId', async (req, res) => {
  const userId = req.session?.user?.id;
  const recipeId = req.params.cardId;

  const [fav, created] = await Favourite.findOrCreate({
    where: { recipeId },
    defaults: { userId },
  });
  if (!created) {
    await Favourite.destroy({ where: { recipeId } });
  }
  res.sendStatus(200);
});
router.delete('/:cardId', async (req, res) => {
  const userId = req.session?.user?.id;
  const recipeId = req.params.cardId;
  await Favourite.destroy({ where: { recipeId, userId } });
  res.sendStatus(200);
});
router.get('/favourite', async (req, res) => {
  const data = await Favourite.findAll({
    where: { userId: req.session.user.id },
    include: Recipe,
  });
  const favouriteList = await JSON.parse(JSON.stringify(data));

  res.json(favouriteList);
});

router.get('/count/:id', async (req, res) => {

  const recipe = await Ingredient.findAll({where: {
    recipeId: req.params.id
  }})
  const counter = recipe.reduce((acc, el) => acc + 1, 0);

  res.json(counter);
})
export default router;
