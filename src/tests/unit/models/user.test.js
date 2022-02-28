// const {
//   sequelize,
//   dataTypes,
//   checkModelName,
//   checkPropertyExists,
// } = require('sequelize-test-helpers');

// const {users} = require('../../../database/models');

// describe('O model de User', () => {
//   const User = users(sequelize, dataTypes);
//   const user = new User();

//   describe('possui o nome "User"', () => {
//     checkModelName(User)('User');
//   });

//   describe('possui as propriedades "name" e "birthday"', () => {
//     ['name', 'birthday'].forEach(checkPropertyExists(user));
//   });
// });
