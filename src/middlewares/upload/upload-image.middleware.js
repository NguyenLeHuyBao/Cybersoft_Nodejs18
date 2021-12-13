const multer = require("multer");
const uploadImage = (typeImage) => {
  const storage = multer.diskStorage({
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + "-" + file.originalname);
    },
  });
  const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
      if (!file.mimetype.match(/png|jpg|jpeg|gif/)) {
        cb(new Error("File does not support"), false);
      }
      cb(null, true);
    },
  });
  return upload.single(typeImage);
};

module.exports = {
  uploadImage,
};
