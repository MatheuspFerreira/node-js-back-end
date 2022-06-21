import mongoose from "mongoose";

const newLetterSchema = new mongoose.Schema ({

    

    id: {type:String},
    name: {type:String, required:true},
    email: {type:String, required: true}

})

const newLetters = mongoose.model('newletters', newLetterSchema);

export default newLetters;
