import newLetters from "../models/Newletter.js";





const NewLetterController = {}

NewLetterController.create = (req,res) => {

    let newlet = req.body.email;

    newLetters.findOne({email: newlet},(error, verficaemail) => {
        console.log(verficaemail)
       
        if(error) {
            console.log('deu erro')

        }else if (null == verficaemail){
            newlet = new newLetters(req.body)
            newlet.save((err) => {

            if(err) {
                res.status(500).send(`${err.message}- Deu erro no cadastro`)
            }else{
                res.status(201).send(`Usuário cadastrado com sucesso ${newlet}`)
            }
            })

            return;


        }else if ((newlet == verficaemail.email)) {

            console.log('usuário já cadastrado')
            res.send("usuário já cadastrado")
           
            
        } 
        
    } )  
}


export default NewLetterController;