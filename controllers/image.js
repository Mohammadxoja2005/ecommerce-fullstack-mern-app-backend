const uuid = require("uuid");
const path = require("path");
const { image } = require("../models");
const sharp = require("sharp");

class Image {
  async createImage(req, res) {
    try {
      const { img } = req.files;
      let filename = uuid.v4() + ".jpg";

      const createImage = await image.create({ img: filename, product_id: 1 });
      img.mv(path.resolve(__dirname, "..", "static", filename));

      res.json(createImage);

      // const imgType = img.mimetype.slice(6);

      // let imgRes = "";

      // switch (imgType) {
      //   case "png":
      //     imgRes = sharp(img).png({ quality: 80 });
      //     break;
      //   case "jpeg":
      //     imgRes = sharp(img).jpeg({ quality: 80 });
      //     break;
      //   case "webp":
      //     imgRes = sharp(img).webp({ quality: 80 });
      //     break;
      // } 


    } catch (err) {
      console.log(err);
    }
  }

  async getAllImages(req, res) {
    const getAllImages = await image.findAll();
    res.json(getAllImages);
  }
}

module.exports = new Image();
