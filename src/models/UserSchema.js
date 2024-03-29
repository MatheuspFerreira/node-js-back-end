const mongoose =require ("mongoose");

const userSchema = new mongoose.Schema ({
    
    id: mongoose.Schema.Types.ObjectId,
    name:{
        type: String, 
        required:true

    },
    password:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true

    },
    cpf:{
        type:String,
        required:true
        
    },
    createdAt: {
        type: Date,
        default: new Date()

    }
})


const user = mongoose.model('users', userSchema);

module.exports = user;