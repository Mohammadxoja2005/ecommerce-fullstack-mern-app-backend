const {user, contact} = require('../models');

class User {
    async allUsers(req,res) {
        const allUsers = await user.findAll({include: contact}); 
        res.json(allUsers); 
    }
} 

module.exports = new User(); 