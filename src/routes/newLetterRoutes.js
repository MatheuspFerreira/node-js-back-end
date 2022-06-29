import express from 'express';
import NewLetterController from '../controllers/newLetterController.js';

const router = express.Router();

router
    .post("/newletter", NewLetterController.create);


    export default router;

