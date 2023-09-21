import express from 'express';
import authCheck from '../../middlewares/authCheck';
import { Recipe, Favourite } from '../../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const recipeList = await Recipe.findAll();
  const initState = { recipeList };
  res.render('Layout', initState);
});

// прописать ручку на рендер страницы с рецептом (get('/:recipeId'))

router.get('/signup', authCheck(false), (req, res) => res.render('Layout'));

router.get('/login', authCheck(false), (req, res) => res.render('Layout'));

router.get('/favourite', authCheck(true), async (req, res) => {
  const data = await Favourite.findAll({
    where: { userId: req.session?.user.id },
    include: Recipe,
  });
  const favouriteList = JSON.parse(JSON.stringify(data));
  const initState = { favouriteList };
  res.render('Layout', initState);
});

router.get('/:id', async (req, res) => {
  const recipeCard = await Recipe.findByPk(req.params.id);
  const initState = { recipeCard };
  res.render('Layout', initState);
});

export default router;
