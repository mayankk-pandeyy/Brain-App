import mongoose from "mongoose";
import dotenv from "dotenv"


dotenv.config();

const MONGODB_URL = process.env.MONGO_URL;

function connectWithDb(){
    mongoose.connect(`${MONGODB_URL}`)
    .then(()=>{
        console.log("Db Connected Successfully")
    })
    .catch((error)=>{
        console.log(error);
        console.log("DB facing Connection issues");
        process.exit(1);
    })
}


export default connectWithDb;