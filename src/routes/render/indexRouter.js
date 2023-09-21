import express from 'express';
import axios from 'axios';
import authCheck from '../../middlewares/authCheck';
import { Recipe, Favourite } from '../../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const recipeList = await Recipe.findAll();
    const imageResponse = await axios.get('/images/media/meals/llcbn01574260722.jpg/preview');
    const ingredientsResponse = await axios.get('www.themealdb.com/api/json/v1/1/list.php?c=lis');
    const initState = {
      recipeList,
      image: imageResponse.data,
      ingredients: ingredientsResponse.data,
    };
    res.render('Layout', initState);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Server error');
  }
});

router.get('/signup', authCheck(false), (req, res) => res.render('Layout'));

router.get('/login', authCheck(false), (req, res) => res.render('Layout'));

router.get('/favourite', authCheck(true), async (req, res) => {
  try {
    const data = await Favourite.findAll({
      where: { userId: req.session?.user.id },
      include: Recipe,
    });
    const initState = { favouriteList: data };
    res.render('Layout', initState);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Server error');
  }
});

router.get('/:id', async (req, res) => {
  try {
    const recipeCard = await Recipe.findByPk(req.params.id);
    const initState = { recipeCard };
    res.render('Layout', initState);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Server error');
  }
});

export default router;
