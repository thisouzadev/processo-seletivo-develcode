const Joi = require('joi');

const {users} = require('../database/models');

const errorConstructor = require('../utils/functions/errorhandling');
const {badRequest} = require('../utils/dictionary/statusCode');

const schemaCreateUser = Joi.object({
  name: Joi.string().required(),
  birthday: Joi.date().raw().required(),
  image: Joi.string().required(),
});
const createUserService = async (name, birthday, image) => {
  const {error} = schemaCreateUser.validate({name, birthday, image});
  if (error) throw errorConstructor(badRequest, error.message);
  const createUserResponse = await users.create({
    name, birthday, image,
  });
  return createUserResponse;
};

module.exports = {createUserService};
