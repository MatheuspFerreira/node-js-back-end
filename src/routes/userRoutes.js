import express from 'express'
import userController from '../controllers/userController.js'

const router = express.Router();

router

    .post('/user', userController.createNewUser)
    .get('/user', userController.userLogin)
    .put('/user',userController.userUpdate)
    .delete('/user',userController.userDelete)




    export default router;