module.exports = (sequelize, DataTypes) => sequelize.define('reservation', {
  checkIn: DataTypes.DATE,
  checkOut: DataTypes.DATE,
});
