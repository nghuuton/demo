'use strict';
module.exports = (sequelize, DataTypes) => {
  const image = sequelize.define('image', {
    slug: DataTypes.STRING
  }, {});
  image.associate = function (models) {
    // associations can be defined here
    image.belongsTo(models.product, {
      as: 'product'
    });
  };
  return image;
};