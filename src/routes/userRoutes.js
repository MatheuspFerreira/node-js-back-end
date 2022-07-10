
const  userController = require ('../controllers/userController.js')
const  authController = require ('../controllers/authController.js')

const express = require('express');
const router = express.Router();

router

    .get('/all',userController.getAll)
    .post('/create', userController.createNewUser)
    .post('/login', authController.userLogin)
    .put('/userupdate',userController.userUpdate)
    .delete('/delete',userController.userDelete)




    module.exports = router;