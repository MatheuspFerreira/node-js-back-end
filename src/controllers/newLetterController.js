import newLetters from "../models/Newletter.js";





const NewLetterController = {}

NewLetterController.create = (req,res) => {

    let letterNew = req.body
    
    

    newLetters.findOne({email: letterNew.email},(error, verficaemail) => {
        
        console.log(verficaemail)

        let letterNew = req.body;
        
       
        if(error) {
            console.log('deu erro')

        }else if (null == verficaemail){
            console.log(`${letterNew.email}`)
            letterNew = new newLetters(req.body)
            letterNew.save((err) => {

                if(err) {
                    res.status(500).send(`${err.message}- Deu erro no cadastro`)
                }else{
                    res.send(letterNew)
                    console.log('Cadastrado com Sucesso')
                }
            })

            return;


        }else if ((letterNew.email == verficaemail.email)) {

            console.log('usuário já cadastrado')
            res.send({resposta: 'Usuário já cadastrado'})
           
            
        } 
        
    } )  
}


export default NewLetterController;