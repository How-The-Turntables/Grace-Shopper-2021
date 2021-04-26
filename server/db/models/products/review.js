const { DataTypes, Model } = require('sequelize');
const db = require('../../db');

class Review extends Model {}

Review.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    stars: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5,
      },
      allowNull: false,
    },
  },
  {
    sequelize: db,
    modelName: 'review',
  }
);

module.exports = Review;
