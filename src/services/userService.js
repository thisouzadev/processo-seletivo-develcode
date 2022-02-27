const Joi = require('joi');

const {users} = require('../database/models');

const errorConstructor = require('../utils/functions/errorhandling');
const {badRequest} = require('../utils/dictionary/statusCode');

const schemaCreateUser = Joi.object({
  name: Joi.string().required(),
  birthday: Joi.date().raw().required(),
});

const createUserService = async (name, birthday) => {
  const {error} = schemaCreateUser.validate({name, birthday});
  if (error) throw errorConstructor(badRequest, error.message);
  const createUserResponse = await users.create({
    name,
    birthday,
  });
  return createUserResponse;
};
const uploadImageMulter = async (id, image) => {
  console.log(image);
  await users.update({
    image: `localhost:3000/src/uploads/${image}`}, {where: {id}},
  );
  const user = await users.findByPk(id);
  if (!users) throw errorConstructor(notFound, 'User does not exist');
  return user;
};

module.exports = {
  createUserService,
  uploadImageMulter,
};
