const Qualification = require('../models/qualification.model');

exports.findAll = async (req, res, next) => {
  try {
    const qualifications = await Qualification.find();
    res.json(qualifications);
  } catch (error) {
    next(error);
  }
};

exports.findOne = async (req, res, next) => {
  try {
    const qualification = await Qualification.findById(req.params.id);
    if (!qualification) return res.status(404).json({ message: 'Qualification not found' });
    res.json(qualification);
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const qualification = await Qualification.create(req.body);
    res.status(201).json(qualification);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const qualification = await Qualification.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!qualification) return res.status(404).json({ message: 'Qualification not found' });
    res.json(qualification);
  } catch (error) {
    next(error);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const qualification = await Qualification.findByIdAndDelete(req.params.id);
    if (!qualification) return res.status(404).json({ message: 'Qualification not found' });
    res.json({ message: 'Qualification deleted successfully' });
  } catch (error) {
    next(error);
  }
};

exports.deleteAll = async (req, res, next) => {
  try {
    await Qualification.deleteMany({});
    res.json({ message: 'All qualifications deleted successfully' });
  } catch (error) {
    next(error);
  }
};
