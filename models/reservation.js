module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define('Reservation', {
    checkIn: { type: DataTypes.DATE, allowNull: false },
    checkOut: { type: DataTypes.DATE, allowNull: false },
    guestName: { type: DataTypes.STRING, allowNull: false },
    guestEmail: { type: DataTypes.STRING, allowNull: true, unique: false, validate: { isEmail: { msg: 'Email invalid.' } } },
    guestPhone: { type: DataTypes.STRING, allowNull: true, unique: false, validate: { len: { args: [7, 20], msg: 'Phone number invalid, too short.' }, isNumeric: { msg: 'not a valid phone number.' } } },
  });

  Model.associate = function (models) {
    Model.belongsTo(models.Listing);
  };

  return Model;
};