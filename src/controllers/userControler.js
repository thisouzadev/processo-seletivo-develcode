const {createUserService} = require('../services/userService');
const {created} = require('../utils/dictionary/statusCode');

const create = async (req, res, next) => {
  try {
    const {name, birthday, image} = req.body;
    const newUser = await createUserService(name, birthday, image);
    return res.status(created).json( newUser);
  } catch (error) {
    console.log(`POST CREATEUSER -> ${error.message}`);
    next(error);
  }
};

module.exports = {create};
