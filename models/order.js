'use strict';
module.exports = (sequelize, DataTypes) => {
  const order = sequelize.define('order', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    address_ship: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  order.associate = function (models) {
    // associations can be defined here
    order.belongsTo(models.customer, {
      as: 'customer'
    });
    order.hasOne(models.order_detail, {
      as: 'order_detail'
    });
    order.belongsTo(models.cart, {
      as: 'cart'
    })
  };
  return order;
};