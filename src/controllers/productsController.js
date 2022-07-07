
const  productsData = require ("../models/Products");

const productsController = {};

    productsController.data = (req,res) => {
       
        productsData.find((error,data) => {


        if(error) {

            res.status(500).send ('Erro Data')

        }else {
            
            res.send(data)
            
        }

    })

}

module.exports =  productsController;