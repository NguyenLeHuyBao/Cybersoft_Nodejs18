const multer = require("multer");
const { getExtensionFileHelper } = require("../../utils/getExtension");
const uploadImage = (typeImage) => {
  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, `./public/images/${typeImage}`);
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, uniqueSuffix + "-" + file.originalname);
    },
  });
  const upload = multer({
    storage,
    fileFilter: (req, file, cb) => {
      const extensionImageList = ["png", "jpg", "jpeg", "gif", "webp"];
      const extension = getExtensionFileHelper(file.originalname);
      if (extensionImageList.includes(extension)) {
        cb(null, true);
      } else {
        cb(new Error("File không hợp lệ. Không thể upload"));
      }
    },
  });
  return upload.single(typeImage);
};

module.exports = {
  uploadImage,
};
