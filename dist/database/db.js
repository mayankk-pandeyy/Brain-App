"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
function connectWithDb() {
    mongoose_1.default.connect("mongodb+srv://pandeyymayankk:jF2rrqWqVWTIQjDN@cluster0.ppzfn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
        .then(() => {
        console.log("Db Connected Successfully");
    })
        .catch((error) => {
        console.log(error);
        console.log("DB facing Connection issues");
        process.exit(1);
    });
}
exports.default = connectWithDb;
