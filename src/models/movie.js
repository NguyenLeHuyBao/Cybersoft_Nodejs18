"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsToMany(models.Cinema, {
      //   through: "cinema_movies",
      // });
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
