"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    static associate(models) {
      this.belongsToMany(models.Cinema, {
        through: models.Cinema_movie,
        foreignKey: "movieId",
      });

      // this.hasMany(models.Cinema_movie, { foreignKey: "movieId" });

      this.belongsToMany(models.User, { through: models.Ticket });

      this.hasMany(models.Showtime, { foreignKey: "movieId" });
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
      isPremiere: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      isSpecial: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "Movie",
      hooks: {
        beforeCreate: function (movie, options) {
          const showDate = movie.getDataValue("dateShow");
          const currentDay = Date.now();
          if (Date.parse(showDate) - currentDay <= 0) {
            movie.setDataValue("isPremiere", false);
          } else {
            movie.setDataValue("isPremiere", true);
          }
        },
      },
    }
  );
  return Movie;
};
