const bcryptjs = require("bcryptjs");
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
    res.status(200).send({ message: "Delete Task Complete", objectDelete });
  } catch (error) {
    res.status(500).send(error);
  }
};

const uploadTask = (Model) => async (req, res) => {
  try {
    const newData = await Model.create(req.body);
    res.status(201).send({ message: "Upload Task Complete", newData });
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateTask = (Model) => async (req, res) => {
  try {
    const { id } = req.params;
    await Model.update(req.body, { where: { id } });
    const updateData = await Model.findByPk(id);
    res.status(200).send({ message: "Update Task Complete", updateData });
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
