const { preorder, user, product} = require("../models");

class Preorder {
  async allPreorders(req, res) {
    const allPreorders = await preorder.findAll();
    res.json(allPreorders);
  } 

  async createPreorder(req,res) { 
    const data = req.body; 
    const createPreorder = await preorder.create(data); 
    res.json(createPreorder); 
  }
} 

module.exports = new Preorder(); 
