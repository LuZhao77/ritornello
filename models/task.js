module.exports = (sequelize, DataTypes) => sequelize.define('task', {
  canStart: DataTypes.DATE,
  mustFinish: DataTypes.DATE,
});
