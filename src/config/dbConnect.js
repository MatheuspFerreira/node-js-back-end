import mongoose from "mongoose";

const password = 1818

mongoose.connect(process.env.MONGODB_URL || `mongodb+srv://wtera:${password}@ecommercetera.fkqdk.mongodb.net/projeto-tera`);

const db = mongoose.connection;







export default db;