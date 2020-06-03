'use strict';
module.exports = (sequelize, DataTypes) => {
  const variation = sequelize.define('variation', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Không được bỏ trống"
        }
      }
    },
    price: DataTypes.DOUBLE,
    price_sale: DataTypes.DOUBLE,
    status: DataTypes.BOOLEAN,
    productId: {
      type: DataTypes.INTEGER,
      unique: {
        msg: "Product already in use !!!"
      }
    }
  }, {});
  variation.associate = function (models) {
    // associations can be defined here
    variation.belongsToMany(models.cart, {
      through: {
        model: models.cart_item,
        foreignKey: 'variationId'
      },
      as: 'Cart'
    });
    variation.belongsTo(models.product, {
      as: 'product'
    })
  };
  return variation;
};