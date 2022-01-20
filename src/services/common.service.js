const { constants } = require("../utils/constants");

const getAllTask = (Model) => async (req, res) => {
  try {
    const result = await Model.findAll({
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });
    res.status(200).send({ message: constants.Success.GetAllTask, result });
  } catch (error) {
    res.status(500).send(error);
  }
};

const getDetailTask = (Model) => async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Model.findOne({
      attributes: { exclude: ["password", "createdAt", "updatedAt"] },
      where: { id },
    });
    res.status(200).send({ message: constants.Success.GetDetailTask, result });
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteTask = (Model) => async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Model.findOne({
      attributes: { exclude: ["password", "createdAt", "updatedAt"] },
      where: { id },
    });
    await Model.destroy({
      where: { id },
    });
    res.status(200).send({ message: constants.Success.DeleteTask, result });
  } catch (error) {
    res.status(500).send(error);
  }
};

const uploadTask = (Model) => async (req, res) => {
  try {
    const result = await Model.create(req.body);
    res.status(201).send({ message: constants.Success.UploadTask, result });
  } catch (error) {
    res.status(500).send(error.toString());
  }
};

const updateTask = (Model) => async (req, res) => {
  try {
    const { id } = req.params;
    await Model.update(req.body, { where: { id } });
    const result = await Model.findOne({
      attributes: { exclude: ["password", "createdAt", "updatedAt"] },
      where: { id },
    });
    res.status(200).send({ message: constants.Success.UpdateTask, result });
  } catch (error) {
    res.status(500).send(error);
  }
};

const adminTaskHelper = {
  getAllTask,
  getDetailTask,
  deleteTask,
  uploadTask,
  updateTask,
};

module.exports = { adminTaskHelper };
