"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cinema_movie extends Model {
    static associate(models) {
      this.belongsTo(models.Movie, { foreignKey: "movieId" });
      this.belongsTo(models.Cinema, { foreignKey: "cinemaId" });
    }
  }
  Cinema_movie.init(
    {
      cinemaId: DataTypes.INTEGER,
      movieId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cinema_movie",
    }
  );
  return Cinema_movie;
};
