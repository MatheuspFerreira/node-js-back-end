import { application, json } from "express";
import productsData from "../models/Products.js";

const productsController = {};

productsController.data = (req,res) => {
    
    productsData.find((error,data) => {

        if(error) {

            res.status(500).send ('Erro Data')

        }else {
            res.status(200).send(data);
        }

    })

    
    



}

export default productsController;