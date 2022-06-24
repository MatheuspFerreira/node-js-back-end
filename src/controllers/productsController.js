import { application, json, request } from "express";
import productsData from "../models/Products.js";

const productsController = {};

    productsController.data = (req,res) => {
        res.header('Access-Control-Allow-Origin', "*");
        res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization");
        productsData.find((error,data) => {


        if(error) {

            res.status(500).send ('Erro Data')

        }else {
            
            res.send(data)
            
            
        }

    })

    
    



}

export default productsController;