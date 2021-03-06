module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('User',
        [{
          id: 1,
          name: 'Lewis Hamilton',
          birthday: '10/10/1991',
          image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg',
        },
        {
          id: 2,
          name: 'Michael Schumacher',
          birthday: '10/12/1910',
          image: 'https://sportbuzz.uol.com.br/media/_versions/gettyimages-52491565_widelg.jpg',
        },
        ], {timestamps: false});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('User', null, {});
  },
};
