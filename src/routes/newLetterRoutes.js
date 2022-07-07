
const express = require('express');
const newLetterController = require('../controllers/newLetterController');

const router = express.Router();

router
    
    .get ('/all', newLetterController.getAll)
    .post('/register', newLetterController.create)


    
    module.exports = router;
