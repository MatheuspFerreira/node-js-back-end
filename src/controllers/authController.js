const  user = require ('../models/UserSchema.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const authController ={};

authController.userLogin = (req, res) => {
    
    const login = req.body;

    user.findOne({email:login.email},(error,data) => {

        
        console.log(data)
        
        if(error) {

            console.log('Deu erro no login');
            return res.status(500).send('Erro no login !!');

        }else if (!data){
            console.log('Usuário não cadastrado !');
            return res.status(401).send({message:"User not found"});

        };
         
        const ValidPassword = bcrypt.compareSync(login.password, data.password)

        if(!ValidPassword) {
            return res.status(401).send({
                message: "Login não autorizado"
            });
        }else {
            
            const token = jwt.sign({name: data.name}, SECRET)

            res.status(200).send({
              message:"Login autorizado",
              token,
              name:data.name,
              email:data.email 
            })
        }

    })
}

module.exports = authController;
