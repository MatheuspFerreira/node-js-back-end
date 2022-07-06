
const  userController = require ('../controllers/userController.js')
const express = require('express');

const router = express.Router();

router

    .post('/', userController.createNewUser)
    .get('/', userController.userLogin)
    .put('/',userController.userUpdate)
    .delete('/',userController.userDelete)




    module.exports = router;