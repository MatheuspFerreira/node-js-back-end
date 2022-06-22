import newLetters from "../models/Newletter.js";





const NewLetterController = {}

NewLetterController.create = (req,res) => {

    let letterNew = req.body
    
    

    newLetters.findOne({email: letterNew.email},(error, verficaemail) => {
        console.log(req.headers)
       
        if(error) {
            console.log('deu erro')

        }else if (null == verficaemail){
            console.log(`${letterNew}`)
            letterNew = new newLetters(req.body)
            letterNew.save((err) => {

            if(err) {
                res.status(500).send(`${err.message}- Deu erro no cadastro`)
            }else{
                res.status(201).send(`Usuário cadastrado com sucesso ${letterNew}`)
            }
            })

            return;


        }else if ((letterNew.email == verficaemail.email)) {

            console.log('usuário já cadastrado')
            res.send("usuário já cadastrado")
           
            
        } 
        
    } )  
}


export default NewLetterController;