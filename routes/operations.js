const express = require("express"); 
const router = express.Router();  
const type = require("../controllers/operations");  

router.get('/types', type.getType);

module.exports = router;
