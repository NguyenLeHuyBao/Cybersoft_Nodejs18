"use strict";
const { Model } = require("sequelize");
const { hashPassGenerate } = require("../utils/hashPassGenerate");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
        beforeCreate: function (user, options) {
          if (user.isNewRecord && user.getDataValue("password")) {
            const hashPassword = hashPassGenerate(
              user.getDataValue("password")
            );
            user.setDataValue("password", hashPassword);
          }
        },
      },
    }
  );
  return User;
};
