import mongoose from "mongoose";
import { userModel } from "./userModel";

const LinkSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Types.ObjectId,
        ref : userModel,
        required : true,
        unique : true
    },
    hash : {
        type : String
    }
})

export const LinkModel = mongoose.model("link", LinkSchema);