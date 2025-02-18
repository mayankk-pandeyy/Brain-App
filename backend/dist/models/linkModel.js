"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userModel_1 = require("./userModel");
const LinkSchema = new mongoose_1.default.Schema({
    userId: {
        type: mongoose_1.default.Types.ObjectId,
        ref: userModel_1.userModel,
        required: true,
        unique: true
    },
    hash: {
        type: String
    }
});
exports.LinkModel = mongoose_1.default.model("link", LinkSchema);
