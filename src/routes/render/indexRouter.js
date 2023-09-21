import express from 'express';
import axios from 'axios';
import authCheck from '../../middlewares/authCheck';
import { Recipe, Favourite, User } from '../../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const recipeList = await Recipe.findAll();
  const initState = { recipeList };
  res.render('Layout', initState);
});

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

export default router;
