
const express = require("express");
const app = express();
const cors = require("cors")
require ("dotenv-safe").config();

app.use(express.json())
app.use(cors())


const db = require("./config/dbConnect");

db.connect();



const userRoutes = require("./routes/userRoutes");
app.use("/user", userRoutes);

const newLetterRoutes = require("./routes/newLetterRoutes");
app.use("/newletter", newLetterRoutes);

const productsRoutes = require("./routes/productsRoutes");
app.use("/products", productsRoutes);



    

module.exports = app;
