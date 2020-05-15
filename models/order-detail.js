'use strict';
module.exports = (sequelize, DataTypes) => {
  const order_detail = sequelize.define('order_detail', {
    price: DataTypes.DOUBLE,
    status: DataTypes.BOOLEAN,
    bill_date: DataTypes.DATE,
    total_price: DataTypes.DOUBLE
  }, {});
  order_detail.associate = function (models) {
    // associations can be defined here
    order_detail.belongsTo(models.order, {
      as: 'order'
    })
  };
  return order_detail;
};