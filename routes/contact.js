const express = require('express'); 
const router = express.Router();   
const contact = require('../controllers/contact'); 

router.post('/', contact.createContact);
router.get('/', contact.getAllContacts); 

module.exports = router; 