const express = require("express"); 
const router = express.Router(); 
const image = require('../controllers/image');  

router.post("/", image.createImage);  

router.get("/", image.getAllImages);    

module.exports = router; 