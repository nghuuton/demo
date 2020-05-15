'use strict';
module.exports = (sequelize, DataTypes) => {
  const customer = sequelize.define('customer', {
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "Không được bỏ trống"
        },
      }
    },
    gender: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    address: {
      type: DataTypes.STRING,
      notEmpry: {
        msg: "Không được bỏ trống địa chỉ"
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        msg: "Email đã tồn tại",
      },
      validate: {
        isEmail: {
          msg: "Sai định dạng Email"
        },
        notEmpty: {
          msg: "Không được bỏ trống"
        },
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: {
          msg: "Ký tự nhập vô phải là số"
        },
        len: [10, 11],
      }
    },
    card: DataTypes.INTEGER
  }, {});
  customer.associate = function (models) {
    // associations can be defined here
    customer.hasOne(models.account, {
      as: 'account',
      foreignKey: 'customerId'
    });
    customer.hasMany(models.order, {
      as: 'order'
    });
  };
  return customer;
};