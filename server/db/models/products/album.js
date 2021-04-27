const { Model, DataTypes } = require('sequelize');
const db = require('../../db');

class Album extends Model {}
// rock, metal, pop, jazz, and make the genre strings
Album.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.TEXT,
    },
    genre: {
      type: DataTypes.ENUM([
        'HEAVY METAL',
        'LIGHT JAZZ',
        'GLAM ROCK',
        'GOSPEL',
        'ELEVATOR',
        'DISCO',
        'HIP-HOP',
        'HAIR BANDS',
        'MATH ROCK',
      ]),
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1700,
        max: 2021,
        notEmpty: true,
      },
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    photoUrl: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
      defaultValue:
        'https://image.shutterstock.com/image-photo/black-vinyl-record-isolated-on-260nw-121247890.jpg',
    },

    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  },

  {
    sequelize: db,
    modelName: 'album',
  }
);

module.exports = Album;
