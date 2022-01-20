"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cinema extends Model {
    static associate(models) {
      this.belongsToMany(models.Movie, {
        through: models.Cinema_movie,
        foreignKey: "cinemaId",
      });

      this.belongsTo(models.Cineplex, {
        foreignKey: "cineplexId",
      });

      this.hasMany(models.Showtime, {
        foreignKey: "cinemaId",
      });
    }
  }
  Cinema.init(
    {
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      image: DataTypes.STRING,
      cineplexId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Cinema",
    }
  );
  return Cinema;
};
