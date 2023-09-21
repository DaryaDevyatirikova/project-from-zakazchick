import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../../db/models';

const authRouter = express.Router();

authRouter.post('/signup', async (req, res) => {
  try {
    const { email, password, username } = req.body;
    if (!email || !password || !username) {
      return res.status(400).json({ message: 'Missing email, password or username' });
    }
    const hashpass = await bcrypt.hash(password, 10);
    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: { hashpass, username },
    });
    if (created) {
      req.session.user = { ...user.get(), hashpass: undefined };
      return res.sendStatus(200);
    }
    return res.status(400).json({ message: 'Email already exists' });
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
});

authRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: 'Missing email or password' });
    }
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: 'Email not found' });
    }
    const isCorrect = await bcrypt.compare(password, user.hashpass);
    if (!isCorrect) {
      return res.status(400).json({ message: 'Incorrect password' });
    }
    req.session.user = { ...user.get(), hashpass: undefined };
    res.sendStatus(200);
  } catch (err) {
    return res.status(500).json({ message: 'Server error' });
  }
});

authRouter.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ message: 'Server error' });
    }
    res.clearCookie('user_sid');
    res.sendStatus(200);
  });
});

export default authRouter;
