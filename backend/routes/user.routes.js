const express = require('express');
const controller = require('../controllers/user.controller');

const router = express.Router();

router.route('/')
  .get(controller.findAll)
  .post(controller.create)
  .delete(controller.deleteAll);

router.route('/:id')
  .get(controller.findOne)
  .put(controller.update)
  .delete(controller.deleteOne);

module.exports = router;
