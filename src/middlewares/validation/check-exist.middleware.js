const checkExist = (Model) => async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await Model.findOne({ where: { id } });
    if (user) {
      next();
    } else {
      res.status(404).send({ message: "Id không đúng" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  checkExist,
};
