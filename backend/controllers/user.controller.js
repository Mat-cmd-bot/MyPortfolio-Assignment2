const bcrypt = require('bcryptjs');
const User = require('../models/user.model');

exports.findAll = async (req, res, next) => {
  try {
    const users = await User.find().select('-password');
    res.json(users);
  } catch (error) {
    next(error);
  }
};

exports.findOne = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      created: user.created,
      updated: user.updated
    });
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const updateData = { ...req.body, updated: Date.now() };

    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }

    const user = await User.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true
    }).select('-password');

    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    next(error);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    next(error);
  }
};

exports.deleteAll = async (req, res, next) => {
  try {
    await User.deleteMany({});
    res.json({ message: 'All users deleted successfully' });
  } catch (error) {
    next(error);
  }
};
