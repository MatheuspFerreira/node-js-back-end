
const  user = require ('../models/UserSchema.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET; 

const userController ={};


userController.getAll = (req,res) => {

    
    const authHeader = req.get('authorization')
    if(!authHeader) {

        return res.status(401).send("Erro no Header");
        
    }else {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, SECRET, (err) => {
            if(err) {
                return res.status(401).send("Não autorizado");
    
            }else {
                user.find((error,data) => {
            
                    if(error) {
                        console.log('Deu erro',error.message)
                        res.status(500).send(error.message)
                    }else {
            
                        res.status(200).send(data);
            
                    }
                });
    
            }
        });
         

    }

    
    


    
    

};

userController.createNewUser = (req,res) => {
    
    let newUser = req.body
    
    user.findOne({cpf:newUser.cpf, name:newUser.name},(error, data) => {

       if (error) {

        console.log('deu erro');
        res.status(500).send('deu erro');

     
       }else if (!data) {

            const hashedPassowrd = bcrypt.hashSync(newUser.password,10);
            newUser.password = hashedPassowrd;
        
            newUser = new user(req.body);
            newUser.save((error) => {

            if(error) {

                res.status(500).send(`${error.message}- Não foi possivel cadastrar`)

            }else{

                res.status(201).send(`Usuário cadastrado com sucesso ${newUser}`)
            }
            });

            


        }else if ((newUser.cpf == data.cpf && newUser.email == data.email)) {

            console.log(newUser.cpf,data.cpf);

            console.log('usuário já cadastrado');
            res.status(200).send("usuário já cadastrado");
           
            
        } 
    })
}


userController.userDelete = (req,res) => {
    
    let deleteUser = req.body;
    
    user.findOneAndDelete({name:deleteUser.name, email:deleteUser.email, cpf:deleteUser.cpf, password:deleteUser.password},(error) => {

        console.log(deleteUser)

        if(error) {
            console.log("Erro ao deletar esse usuário ! ");
            res.status(500).send(`${error.mensage} Erro ao deletar o usuário !`);

        
        }else {
            console.log("Usuário deletado com sucesso !")
            res.status(200).send("Usuário deletado com Sucesso !")
        }
    })
}

userController.userUpdate = (req,res) => {
    
    const updateUser = req.body;

    user.findOneAndUpdate({name:updateUser.name, email:updateUser.email},{password: updateUser.password},(error,data) => {

        console.log(data)
        
        if (!data){

            res.status(200).send("Usuário ou e-mail incorreto !");


        }else if((data.name == updateUser.name && data.email == updateUser.email)){
            
            if(!error) {
                res.status(200).send("Seus dados foram atualizados com sucesso !");
                console.log("Seus dados foram atualizados com sucesso !");
                console.log(data)
    
            }else {
                res.status(500).send(`${error.mensage}: Erro na atualização !!`);
                console.log(`${error.mensage}: Erro na atualização !!`)

                
    
            }
            
        }
        
        
        
        
    });


}


module.exports = userController; 