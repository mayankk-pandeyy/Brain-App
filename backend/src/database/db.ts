import mongoose from "mongoose";

function connectWithDb(){
    mongoose.connect("mongodb+srv://pandeyymayankk:jF2rrqWqVWTIQjDN@cluster0.ppzfn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
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