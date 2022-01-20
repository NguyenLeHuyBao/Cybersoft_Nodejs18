const { Cineplex } = require("../models");

const { constants } = require("../utils/constants");

const uploadCineplex = async (body) => {
  const { name } = body;

  const existedCineplex = await Cineplex.findOne({ where: { name } });

  if (existedCineplex) throw new Error(constants.Errors.ExistedData);

  const result = await Cineplex.create(body);

  return result;
};

const cineplexService = { uploadCineplex };

module.exports = {
  cineplexService,
};
