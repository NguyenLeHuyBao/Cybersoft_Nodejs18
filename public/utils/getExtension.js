const getExtensionFileHelper = (file) => {
  const arrString = file.split(".");
  return arrString[arrString.length - 1];
};

module.exports = {
  getExtensionFileHelper,
};
