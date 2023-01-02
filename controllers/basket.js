const { basket, basket_product } = require("../models");

class Basket {
  async allBaskets(req, res) {
    const allBaskets = await basket.findAll({
      where: { user_id: 1 },
      include: basket_product,
    });
    res.json(allBaskets);
  }

  // async createBasket(req,res) {
  //     const data = req.body;
  //     const createBasket = await basket.create(data);
  //     res.json(createBasket);
  // }
}

module.exports = new Basket();
