const {
  Cineplex,
  Cinema,
  User,
  Movie,
  Ticket,
  sequelize,
} = require("../models");

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
    const listCinema = await Cinema.findAll({
      include: [
        {
          model: Cineplex,
        },
      ],
    });

    // const querySQL = `
    //   select * from Cinemas
    // `;
    // const [result, metadata] = await sequelize.query(querySQL);

    // res.status(200).send({ result, metadata });
    res.status(200).send(listCinema);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

const getAllTickets = async (req, res) => {
  try {
    const ticketList = await Ticket.findAll({
      attributes: ["id"],
      include: [
        {
          model: User,
          attributes: ["name"],
        },
        {
          model: Movie,
          attributes: ["name"],
        },
      ],
    });
    // const ticketList = await Ticket.findAll();
    // console.log(ticketList);
    res.status(200).send(ticketList);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getListCineplex,
  getListCinema,
  getAllTickets,
};
