import express from 'express';
import authCheck from '../../middlewares/authCheck';

const router = express.Router();

router.get('/', (req, res) => {
  const initState = { hello: 'world' };
  res.render('Layout', initState);
});

router.get('/signup', authCheck(false), (req, res) => res.render('Layout'));

router.get('/login', authCheck(false), (req, res) => res.render('Layout'));

export default router;
