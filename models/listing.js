module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('Listing', {
    name: { type: DataTypes.STRING, allowNull: false },
    address1: { type: DataTypes.STRING, allowNull: false },
    address2: DataTypes.STRING
  });

  Model.associate = function (models) {
    Model.belongsTo(models.User);
    Model.hasMany(models.Reservation);
  };

  return Model;
};