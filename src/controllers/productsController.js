
const  productsData = require ("../models/ProductsSchema");

const productsController = {};

    productsController.getAll = (req,res) => {
       
        productsData.find((error,data) => {


            if(error) {

                res.status(500).send ('Erro Data')

            }else {
                
                res.send(data)
                
            }

        })

    }

    productsController.findProduct = (req, res) => {

        const searchProduct = req.params.produto
        const searchProductUpperCase = searchProduct[0].toUpperCase() + searchProduct.substring(1);

        console.log(searchProduct)
        productsData.find({name:{$regex: searchProduct} && {$regex: searchProductUpperCase}}, (error, data) =>{

            console.log(data)
            console.log(searchProduct)

            if(data){
                res.status(200).send(data)
            }else {
                res.status(400).send({error:true})

            };


            
        })


    };

    productsController.getProductById = (req, res) => {

        const idProduct = req.params.id

        console.log(idProduct)
        productsData.findOne({ name:idProduct }, (error, data) =>{

            console.log(data)
            console.log(idProduct)
            if(data) {
                res.status(200).send(data) 
            }else {
                res.status(400).send({error:true}) 

            };

            
        })


    };

    

module.exports =  productsController;