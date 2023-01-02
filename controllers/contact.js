const { contact, user} = require("../models");

class Contact {
  async createContact(req, res) {
    const data = req.body;
    const contacts = await contact.create(data);
    res.json(contacts);
  }

  async getAllContacts(req, res) {
    const contacts = await contact.findAll({ include: user });
    res.json(contacts);
  }
}

module.exports = new Contact();
