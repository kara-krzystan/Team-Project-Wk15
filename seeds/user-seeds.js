const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    username: 'Bruce',
    password: 'wayne'
  },
  {
  username: 'Nacho',
  password: 'libre'
}
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;