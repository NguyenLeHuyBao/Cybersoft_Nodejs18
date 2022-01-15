"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class bookedSeat extends Model {
    static associate(models) {
      this.belongsTo(models.Showtime, { foreignKey: "showtimeId" });
      this.belongsTo(models.Seat, { foreignKey: "seatId" });
    }
  }
  bookedSeat.init(
    {
      seatId: DataTypes.INTEGER,
      showtimeId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "bookedSeat",
    }
  );
  return bookedSeat;
};
