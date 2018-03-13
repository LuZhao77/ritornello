module.exports = (sequelize, DataTypes) => sequelize.define('listing', {
  name: DataTypes.STRING,
  address1: DataTypes.STRING,
  address2: DataTypes.STRING
});
