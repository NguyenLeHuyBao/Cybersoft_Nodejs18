"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Showtime extends Model {
    static associate(models) {
      this.belongsTo(models.Cinema, {
        foreignKey: "cinemaId",
      });

      this.belongsTo(models.Movie, {
        foreignKey: "movieId",
      });

      this.hasMany(models.Seat, {
        foreignKey: "showtimeId",
      });

      this.belongsToMany(models.Seat, {
        through: models.bookedSeat,
        foreignKey: "showtimeId",
      });
    }
  }
  Showtime.init(
    {
      startTime: DataTypes.DATE,
      cinemaId: DataTypes.INTEGER,
      movieId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Showtime",
    }
  );
  return Showtime;
};
