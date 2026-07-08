const express = require('express');
const authController = require('../controllers/auth.controller');
const { protect } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/signin', authController.signin);
router.get('/signout', authController.signout);
router.get('/protected', protect, authController.protectedRoute);

module.exports = router;
