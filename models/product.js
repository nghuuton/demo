'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Không được bỏ trống!"
        },
      },
      unique: {
        args: true,
        msg: 'Product already in use!'
      }
    },
    description: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
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