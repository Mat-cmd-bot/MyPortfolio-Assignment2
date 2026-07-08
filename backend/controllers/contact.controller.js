const Contact = require('../models/contact.model');

exports.findAll = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    next(error);
  }
};

exports.findOne = async (req, res, next) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Contact not found' });
    res.json(contact);
  } catch (error) {
    next(error);
  }
};

exports.create = async (req, res, next) => {
  try {
    const contact = await Contact.create(req.body);
    res.status(201).json(contact);
  } catch (error) {
    next(error);
  }
};

exports.update = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!contact) return res.status(404).json({ message: 'Contact not found' });
    res.json(contact);
  } catch (error) {
    next(error);
  }
};

exports.deleteOne = async (req, res, next) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) return res.status(404).json({ message: 'Contact not found' });
    res.json({ message: 'Contact deleted successfully' });
  } catch (error) {
    next(error);
  }
};

exports.deleteAll = async (req, res, next) => {
  try {
    await Contact.deleteMany({});
    res.json({ message: 'All contacts deleted successfully' });
  } catch (error) {
    next(error);
  }
};
