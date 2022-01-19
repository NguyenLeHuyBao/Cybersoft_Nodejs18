"use strict";
const { Model } = require("sequelize");
const { hashPassGenerate } = require("../utils/hashPassGenerate");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.belongsToMany(models.Movie, { through: models.Ticket });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: { type: DataTypes.STRING, unique: true },
      password: DataTypes.STRING,
      phone: DataTypes.STRING,
      role: {
        type: DataTypes.STRING,
        defaultValue: "CLIENT",
      },
      avatar: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
      hooks: {
        beforeBulkUpdate: function (user, options) {
          if (user.attributes.password) {
            const hashPassword = hashPassGenerate(user.attributes.password);
            user.attributes.password = hashPassword;
          }
        },
      },
    }
  );
  return User;
};
