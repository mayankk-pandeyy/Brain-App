"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.contentModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const userModel_1 = require("./userModel");
const contentSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose_1.default.Types.ObjectId,
        ref: userModel_1.userModel,
        required: true
    },
});
exports.contentModel = mongoose_1.default.model("content", contentSchema);
