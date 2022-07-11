
const mongoose = require('mongoose');

const newLetterSchema = new mongoose.Schema ({

    id: mongoose.Schema.Types.ObjectId,
    name: {
        type:String, 
        required:true

    },
    email: {
        type:String, 
        required: true
        
    },
    createdAt: {
        type: Date,
        default: new Date()

    }

})

const newLetters = mongoose.model('newletters', newLetterSchema);

module.exports = newLetters;
