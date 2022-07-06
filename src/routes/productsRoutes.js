
const express = require('express');
const productsController = require('../controllers/productsController');

const router = express.Router();

router

 .get('/products', productsController.data)



 
    
 module.exports = router;