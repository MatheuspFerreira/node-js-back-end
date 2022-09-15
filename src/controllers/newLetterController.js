
const newLetters = require("../models/NewletterSchema")



const newLetterController = {}

newLetterController.getAll = (req,res) => {

    newLetters.find((error,data) => {

        if(error) {

            console.log(error.message);
            res.status(500).send(error.message);

        }else {

            res.status(200).send(data);
        }

    });
}

newLetterController.create = (req,res) => {

    let letterNew = req.body
    
    
    newLetters.findOne({email: letterNew.email},(error, data) => {
        
       
       
        if(error) {
            console.log('deu erro')
            
        }else if (!data){

           

            letterNew = new newLetters(req.body)
            letterNew.save((err) => {

                if(err) {
                    res.status(500).send(
                        {
                            error:true, 
                            message:`${err.message}- Deu erro no cadastro`

                        }
                    );

                }else{
                    res.status(201).send(letterNew)
                    console.log('Cadastrado com Sucesso')
                    
                }
            })

        }else if ((letterNew.email == data.email)) {

            console.log('usuário já cadastrado')
            res.send(
                {
                    error:true,
                    message: 'Usuário já cadastrado'

                }
            );
           
        } 
        
    } )  
}


module.exports = newLetterController;