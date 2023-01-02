const { product, productinfo, image, tag, about } = require("../models");

class Product {
  async getOneProduct(req, res) {
    const oneProduct = await product.findAll({
      where: { id: 1 },
      include: [
        { model: about },
        { model: tag },
        { model: productinfo },
        { model: image },
      ],
    });
    res.json(oneProduct);
  } 

  async getAllProductsByCategory(req,res) {
    const {category_id} = req.body;   
     
    const getAllProductsByCategory = await product.findAll({where: {category_id: category_id}});   

    res.json(getAllProductsByCategory); 
  }

  async createProduct(req, res) {
    const data = req.body;

    await product.create(data);
    res.json("success");
  }
}

module.exports = new Product();
