import express from 'express';
import axios from 'axios';
import authCheck from '../../middlewares/authCheck';
import { Recipe, Favourite, User } from '../../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {

  const { user } = req.session;

  if (!user) {
    const recipeList = await Recipe.findAll();
    const initState = { recipeList };
    res.render('Layout', initState);
    return;
  }
  const recipeList = await Recipe.findAll({
    include: {
      model: User,
      attributes: ['id'],
      as: 'fav',
    },
  });

  const initState = { recipeList };
  res.render('Layout', initState);

//   try {
//     const recipeList = await Recipe.findAll();
//     const imageResponse = await axios.get('/images/media/meals/llcbn01574260722.jpg/preview');
//     const ingredientsResponse = await axios.get('www.themealdb.com/api/json/v1/1/list.php?c=lis');
//     const initState = {
//       recipeList,
//       image: imageResponse.data,
//       ingredients: ingredientsResponse.data,
//     };
//     res.render('Layout', initState);
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).send('Server error');
//   }

});

router.get('/signup', authCheck(false), (req, res) => res.render('Layout'));

router.get('/login', authCheck(false), (req, res) => res.render('Layout'));

router.get('/favourite', authCheck(true), async (req, res) => {

  const data = await Favourite.findAll({
    where: { userId: req.session.user.id },
    include: Recipe,
  });
  const favouriteList = await JSON.parse(JSON.stringify(data));
  const initState = { favouriteList };
  console.log('-----------', favouriteList);
  res.render('Layout', initState);

//   try {
//     const data = await Favourite.findAll({
//       where: { userId: req.session?.user.id },
//       include: Recipe,
//     });
//     const initState = { favouriteList: data };
//     res.render('Layout', initState);
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).send('Server error');
//   }
});

router.get('/rec/:recipeId', async (req, res) => {
  const recipeCard = await Recipe.findByPk(req.params.recipeId);
  const initState = { recipeCard };
  res.render('Layout', initState);

});

export default router;
