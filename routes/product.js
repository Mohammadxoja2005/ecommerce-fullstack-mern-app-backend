const express = require("express"); 
const router = express.Router(); 
const product = require('../controllers/product'); 

router.get('/single', product.getOneProduct);
router.post('/category', product.getAllProductsByCategory)  

module.exports = router; 