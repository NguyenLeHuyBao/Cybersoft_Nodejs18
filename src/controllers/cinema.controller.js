const { Cineplex, Cinema, sequelize } = require("../models");

const getListCineplex = async (req, res) => {
  try {
    const listCineplex = await Cineplex.findAll({
      include: [
        {
          model: Cinema,
        },
      ],
    });
    res.status(200).send({ message: listCineplex });
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

const getListCinema = async (req, res) => {
  try {
    // const listCinema = await Cinema.findAll({
    //   include: [
    //     {
    //       model: Cineplex,
    //     },
    //   ],
    // });

    const querySQL = `
      select * from Cinemas
    `;
    const [result, metadata] = await sequelize.query(querySQL);

    res.status(200).send({ result, metadata });
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

module.exports = {
  getListCineplex,
  getListCinema,
};
