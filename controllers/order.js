const { order } = require("../models");
const {
  service,
  wrap,
  tire,
  guarantee,
  equipment,
  user,
  product,
} = require("../models");

class Order {
  async allOrders(req, res) {
    const allOrders = await order.findAll({
      include: [
        { model: user },
        { model: product },
        { model: service },
        { model: wrap },
        { model: tire },
        { model: guarantee },
        { model: equipment },
      ],
    });
    res.json(allOrders);
  }

  async createOrder(req, res) {
    const data = req.body;
    const createOrder = await order.create(data);
    res.json(createOrder);
  }
}

module.exports = new Order();
