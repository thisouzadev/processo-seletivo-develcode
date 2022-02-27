const {DataTypes} = require('sequelize');

const Attributes = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  birthday: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
};

module.exports = (sequelize) => {
  const User = sequelize.define('users', Attributes, {
    timestamps: false,
    tableName: 'users',
  });

  return User;
};
