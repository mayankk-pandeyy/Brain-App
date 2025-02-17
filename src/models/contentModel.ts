import mongoose from "mongoose";
import { userModel } from "./userModel";
import { TagModel } from "./tagModel";

const contentSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    link : {
        type : String,
        required : true
    },
    userId : {
        type : mongoose.Types.ObjectId,
        ref : userModel,
        required : true
    },
})

export const contentModel = mongoose.model("content", contentSchema);