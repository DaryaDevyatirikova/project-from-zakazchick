import express from 'express';
import authCheck from '../../middlewares/authCheck';
import { Recipe } from '../../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const recipeList = await Recipe.findAll();
  const initState = { recipeList };
  res.render('Layout', initState);
});

router.get('/signup', authCheck(false), (req, res) => res.render('Layout'));

router.get('/login', authCheck(false), (req, res) => res.render('Layout'));

router.get('/favourite', authCheck(true), (req, res) => res.render('Layout'));

export default router;
