'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Không được bỏ trống!"
        }
      }
    },
    description: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN
  }, {});
  product.associate = function (models) {
    // associations can be defined here
    product.hasMany(models.variation, {
      as: 'variation'
    });
    product.hasMany(models.image, {
      as: 'image'
    })
  };
  return product;
};