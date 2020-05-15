'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Không được bỏ trống!"
        }
      }
    },
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    slug: DataTypes.STRING
  }, {});
  category.associate = function (models) {
    // associations can be defined here
    category.hasMany(models.product, {
      as: 'product'
    })
  };
  return category;
};