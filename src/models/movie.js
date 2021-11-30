"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Ticket }) {
      // define association here
      this.hasMany(Ticket, {
        foreignKey: "movieId",
      });
    }
  }
  Movie.init(
    {
      name: DataTypes.STRING,
      alias: DataTypes.STRING,
      poster: DataTypes.STRING,
      trailer: DataTypes.STRING,
      duration: DataTypes.INTEGER,
      desc: DataTypes.TEXT,
      dateShow: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  return Movie;
};
