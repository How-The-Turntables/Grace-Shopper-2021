const { Model, DataTypes } = require('sequelize');
const db = require('../../db');

class Artist extends Model {}

Artist.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'artist',
  }
);

module.exports = Artist;
