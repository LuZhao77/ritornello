module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('Task', {
    canStartAfter: DataTypes.DATE,
    mustFinishBefore: DataTypes.DATE,
    doneAt: DataTypes.DATE,
  });

  Model.associate = function (models) {
    Model.belongsTo(models.Listing);
    Model.belongsTo(models.User, {as: 'owner'});
  };

  return Model;
};