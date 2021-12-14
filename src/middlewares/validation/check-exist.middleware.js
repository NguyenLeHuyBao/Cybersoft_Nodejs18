const checkExist = (Model) => async (req, res, next) => {
  try {
    const { id } = req.params;
    const foundSubject = await Model.findOne({ where: { id } });
    if (!foundSubject) res.status(404).send({ message: "Id không đúng" });
    next();
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  checkExist,
};
