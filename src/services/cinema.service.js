const { Cinema } = require("../models");

const { constants } = require("../utils/constants");

const uploadCinema = async (body) => {
  const { name } = body;

  const existedCinema = await Cinema.findOne({ where: { name } });

  if (existedCinema) throw new Error(constants.Errors.ExistedData);

  const result = await Cinema.create(body);

  return result;
};

const cinemaService = { uploadCinema };

module.exports = {
  cinemaService,
};
