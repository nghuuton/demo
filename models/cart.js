'use strict';
module.exports = (sequelize, DataTypes) => {
  const cart = sequelize.define('cart', {
    id_default: DataTypes.INTEGER
  }, {});
  cart.associate = function (models) {
    // associations can be defined here
    cart.belongsToMany(models.variation, {
      through: {
        model: models.cart_item,
        foreignKey: 'carId'
      },
      as: 'Variation'
    })
  };
  return cart;
};