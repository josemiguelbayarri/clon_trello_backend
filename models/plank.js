'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plank extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Plank.init({
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    image: DataTypes.TEXT,
    activity: DataTypes.STRING,
    labelsId: DataTypes.INTEGER,
    documents: DataTypes.TEXT,
    expirationDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Plank',
  });
  return Plank;
};