import mongoose from "mongoose";

const password = 1818

mongoose.connect(`mongodb+srv://wtera:${password}@ecommercetera.fkqdk.mongodb.net/projeto-tera`);

const db = mongoose.connection;







export default db;