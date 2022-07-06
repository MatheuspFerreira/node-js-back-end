
const express = require('express');
const NewLetterController = require('../controllers/newLetterController');

const router = express.Router();

router
    .post("/newletter", NewLetterController.create);


    module.exports = router;
