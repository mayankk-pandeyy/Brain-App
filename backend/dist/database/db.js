"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const MONGODB_URL = process.env.MONGO_URL;
function connectWithDb() {
    mongoose_1.default.connect(`${MONGODB_URL}`)
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
