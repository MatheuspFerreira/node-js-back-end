import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routers/index.js";
import cors from "cors"


const app = express();
app.use(express.json())
app.use(cors())



routes(app);

db.on ("error", console.log.bind(console,'Erro de conexão'))
db.once('open', () => {

    console.log("Conexão com o banco feita com sucesso !!")

})


    

export default app ;
