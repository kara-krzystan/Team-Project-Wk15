const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Timeblock extends Model { }

Timeblock.init(
  {
    //--ID
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
  time: {
      type: DataTypes.INTEGER,
      allowNull: false,

  }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'Timeblock'
  }
);

module.exports = Timeblock;