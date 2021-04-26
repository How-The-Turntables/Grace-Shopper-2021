const { Model, DataTypes } = require('sequelize');
const db = require('../../db');

class Artist extends Model {}

Artist.init({
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
    unique: true,
  },
  decription: {
    type: DataTypes.TEXT
  }
},{
  sequelize: db,
  modelName: 'artist'
});

module.exports = Artist;
