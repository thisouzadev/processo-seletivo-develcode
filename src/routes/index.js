const express = require('express');
const userController = require('../controllers/userControler');
const router = express.Router();

router.post('/register', userController.create);

module.exports = router;
