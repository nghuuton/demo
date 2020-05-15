'use strict';
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const account = sequelize.define('account', {
    username: {
      type: DataTypes.STRING,
      unique: {
        msg: "Username đã tồn tại"
      },
      validate: {
        notEmpty: {
          msg: "Không được bỏ trống"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      notEmpty: {
        "msg": "Không được bỏ trống password"
      }
    }
  }, {
    hooks: {
      beforeCreate: async function (account) {
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(account.password, salt);
        account.password = passwordHash;
      },

    }
  });

  account.associate = function (models) {
    // associations can be defined here
    account.belongsTo(models.customer, {
      as: 'customer'
    });
    account.hasOne(models.role, {
      as: 'role'
    });
  };

  return account;
};