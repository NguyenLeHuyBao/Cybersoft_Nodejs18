"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    static associate(models) {
      this.belongsTo(models.Showtime);

      this.belongsToMany(models.Showtime, {
        through: models.bookedSeat,
        foreignKey: "seatId",
      });
    }
  }
  Seat.init(
    {
      name: DataTypes.STRING,
      status: DataTypes.BOOLEAN,
      price: DataTypes.INTEGER,
      type: DataTypes.STRING,
      showtimeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Seat",
    }
  );
  return Seat;
};
