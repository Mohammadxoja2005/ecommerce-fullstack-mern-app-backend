const express = require('express'); 
const router = express.Router();   
const basket = require('../controllers/basket');  

router.get('/', basket.allBaskets); 

module.exports = router; 