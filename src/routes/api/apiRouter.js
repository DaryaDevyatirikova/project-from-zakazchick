import express from 'express';
import { Favourite,Recipe,User } from '../../../db/models';

const router = express.Router();

router.get('/', async(req, res) => {
  
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
  res.sendStatus(200)
});
export default router;
