const { DataTypes, Model } = require('sequelize');
// const { db } = require('../../index');
const db = require('../../db');

class Review extends Model {}

Review.init(
  {
    comment: {
      type: DataTypes.TEXT
    },
    stars: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5,
      },
      defaultValue: 5
    },
  },
  { sequelize: db, modelName: 'review' }
);

module.exports = Review;
