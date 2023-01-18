const { type } = require("../models");

class Type {
    async getType(req, res) {
        const getAllTypes = await type.findAll();
        res.json(getAllTypes);
    }
}

module.exports = new Type(); 