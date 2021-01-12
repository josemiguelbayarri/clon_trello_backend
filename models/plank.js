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
      Plank.belongsTo(models.Board)
      /* Plank.hasMany(models.Task)  */
      // define association here
    }
  };
  Plank.init({
    name: DataTypes.STRING,
    boardId: DataTypes.INTEGER,
    /* tasksId: DataTypes.ARRAY(DataTypes.INTEGER) */
  }, {
    sequelize,
    modelName: 'Plank',
  });
  return Plank;
};