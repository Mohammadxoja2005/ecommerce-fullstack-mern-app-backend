const express = require('express'); 
const router = express.Router();    
const preorder = require('../controllers/preorder');  

router.get('/', preorder.allPreorders);  
router.post('/', preorder.createPreorder); 

module.exports = router; 