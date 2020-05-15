'use strict';
module.exports = (sequelize, DataTypes) => {
  const cart_item = sequelize.define('cart_item', {
    carId: DataTypes.INTEGER,
    variationId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  }, {});
  cart_item.associate = function (models) {
    // associations can be defined here
  };
  return cart_item;
};