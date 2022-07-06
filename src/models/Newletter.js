
const mongoose = require('mongoose');

const newLetterSchema = new mongoose.Schema ({

    

    id: {type:String},
    name: {type:String, required:true},
    email: {type:String, required: true}

})

const newLetters = mongoose.model('newletters', newLetterSchema);

module.exports = newLetters;
