
const express = require('express');
const productsController = require('../controllers/productsController');

const router = express.Router();

router

    .get('/all', productsController.getAll)
    .get('/:produto', productsController.findProduct)

    
    module.exports = router;