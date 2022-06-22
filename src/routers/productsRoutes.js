import  express  from "express";
import productsController from "../controllers/productsController.js";

const router = express.Router();

router

 .get('/products', productsController.data)



 
    
export default router; 