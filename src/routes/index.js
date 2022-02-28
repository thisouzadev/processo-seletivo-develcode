const express = require('express');
const userController = require('../controllers/userControler');
const router = express.Router();
const upload = require('../middlewares/multer');


router.post('/register', userController.create);
router.put('/register/:id/image', upload, userController.uploadImage);
router.get('/user', userController.getAllUsers);
module.exports = router;
