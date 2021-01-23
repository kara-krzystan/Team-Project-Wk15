const sequelize = require('../config/connection');
const { User } = require('../models');

const userdata = [
  {
    firstname: 'Bruce',
    lastname: 'Wayne',
    email: 'fearthebat@waynetech.com',
    username: 'Batman',
    password: 'wayneRules'
  },
  {
    firstname: 'Nacho',
    lastname: 'Libre',
    email: 'justforfun@nacho.com',
    username: 'Nachoooooo!',
    password: 'libre'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;