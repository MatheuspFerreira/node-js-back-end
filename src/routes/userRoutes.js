
const  userController = require ('../controllers/userController.js')
const express = require('express');

const router = express.Router();

router

    .get('/all',userController.getAll)
    .post('/newuser', userController.createNewUser)
    .post('/login', userController.userLogin)
    .put('/userupdate',userController.userUpdate)
    .delete('/delete',userController.userDelete)




    module.exports = router;