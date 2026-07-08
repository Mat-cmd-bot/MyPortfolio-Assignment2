const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const createToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET || 'portfolio_secret_key', {
    expiresIn: process.env.JWT_EXPIRES_IN || '1d'
  });
};

exports.signin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }

    const user = await User.findOne({ email });

    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = createToken(user._id);

    res.cookie('token', token, {
      httpOnly: true,
      sameSite: 'strict'
    });

    res.json({
      message: 'Signed in successfully',
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    next(error);
  }
};

exports.signout = (req, res) => {
  res.clearCookie('token');
  res.json({ message: 'Signed out successfully' });
};

exports.protectedRoute = (req, res) => {
  res.json({
    message: 'This is a protected route',
    user: req.user
  });
};
