const { News } = require("../models");

const { cloudinary } = require("../utils/cloudinary");
const { constants } = require("../utils/constants");

const uploadNewsImage = async (id, file) => {
  console.log(id);
  const result = await cloudinary.uploader.upload(file.path, {
    use_filename: true,
    folder: `/Cybersoft_Nodejs18/${file.fieldname}`,
  });
  console.log(result);

  if (!result) throw new Error(constants.Errors.BadRequest);

  const newsUploadImage = await News.findOne({
    where: {
      id,
    },
  });

  if (!newsUploadImage) throw new Error(constants.Errors.BadRequest);

  newsUploadImage.newsImg = result.url;
  await newsUploadImage.save();

  return { newsUploadImage, result };
};

const newsService = { uploadNewsImage };

module.exports = {
  newsService,
};
