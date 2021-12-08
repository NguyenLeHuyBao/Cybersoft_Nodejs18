const getAllTask = (Model) => async (req, res) => {
  try {
    const listObject = await Model.findAll({
      attributes: {
        exclude: ["password"],
      },
    });
    res.status(200).send({ message: "Get All Task Complete", listObject });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetailTask = (Model) => async (req, res) => {
  try {
    const { id } = req.params;
    const objectDetail = await Model.findOne({ where: { id } });
    res.status(200).send({ message: "Get Detail Task Complete", objectDetail });
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteTask = (Model) => async (req, res) => {
  try {
    const { id } = req.params;
    const objectDelete = await Model.findByPk(id);
    await Model.destroy({
      where: { id },
    });
    res.status(200).send({ message: "Succesfully delete movie", objectDelete });
  } catch (error) {
    res.status(500).send(error);
  }
};

const adminTaskHelper = {
  getAllTask,
  getDetailTask,
  deleteTask,
};

module.exports = { adminTaskHelper };
