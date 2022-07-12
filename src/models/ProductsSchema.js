
const mongoose = require('mongoose');


const productSchema = new mongoose.Schema ({

    _id: mongoose.Schema.Types.ObjectId,
    name:{
        type: String,
        require:true

    },
    price:{
        type: String, 
        require:true

    },
    pricestrike:{
        type: String, 
        require:true

    },
    discount:{
        type: String, 
        require:true

    },
    stock:{
        type: String, 
        require:true

    },
    imgProduct:{
        type: String, 
        require:true

    },
    imgAlt:{
        type: String, 
        require:true

    },
    payment:{
        type: String, 
        require:true

    },
    startcondition:{
        type: String, 
        require:true

    },
    createdAt: {
        type: Date,
        default: new Date()

    }
})


const productsData = mongoose.model ('products',productSchema);

module.exports = productsData;