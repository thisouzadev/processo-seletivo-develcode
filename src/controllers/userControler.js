const {
  createUserService, uploadImageMulter,
} = require('../services/userService');
const {created, success} = require('../utils/dictionary/statusCode');

const create = async (req, res, next) => {
  try {
    const {name, birthday} = req.body;
    const newUser = await createUserService(name, birthday);
    return res.status(created).json(newUser);
  } catch (error) {
    console.log(`POST CREATEUSER -> ${error.message}`);
    next(error);
  }
};

const uploadImage = async (req, res, next) => {
  try {
    const {id} = req.params;
    const {filename} = req.file;
    const getImage = await uploadImageMulter(id, filename);
    return res.status(success).json(getImage);
  } catch (error) {
    console.log(`PUT UPLOADIMAGE -> ${error.message}`);
    next(error);
  }
};

module.exports = {create, uploadImage};
