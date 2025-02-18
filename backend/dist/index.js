"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
const bcrypt_1 = __importDefault(require("bcrypt"));
const userModel_1 = require("./models/userModel");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = __importDefault(require("./database/db"));
const middleware_1 = require("./middlewares/middleware");
const contentModel_1 = require("./models/contentModel");
const linkModel_1 = require("./models/linkModel");
const generateHash_1 = require("./controllers/generateHash");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const JWT_SECRET = "mayank";
app.post("/api/v1/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { firstName, lastName, email, username, password } = req.body;
        // ZOD Validation
        const validData = zod_1.z.object({
            email: zod_1.z.string().min(3).max(100).email(),
            firstName: zod_1.z.string().min(3).max(20),
            lastName: zod_1.z.string().min(3).max(20),
            username: zod_1.z.string().min(3).max(20),
            password: zod_1.z.string().min(3).max(100)
        });
        const parsedData = validData.safeParse(req.body);
        if (!parsedData.success) {
            res.json({
                message: "Incorrect format!",
                error: parsedData.error
            });
            return;
        }
        // Hashing the passoword
        const hashedPass = yield bcrypt_1.default.hash(password, 5);
        const response = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: hashedPass,
            username: username
        };
        console.log(response);
        yield userModel_1.userModel.create(response);
        res.json({
            message: "User signed up!"
        });
    }
    catch (e) {
        res.status(411).json({
            message: "User already exists"
        });
    }
}));
app.get("/api/v1/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    let foundUser = null;
    foundUser = yield userModel_1.userModel.findOne({ username: username });
    if (foundUser == null) {
        res.json({
            message: "User not found!"
        });
        return;
    }
    const hash = foundUser.password;
    let matchPass = yield bcrypt_1.default.compare(password, hash);
    if (!matchPass) {
        res.json({
            message: "Password is INCORRECT!"
        });
        return;
    }
    let token = yield jsonwebtoken_1.default.sign({
        userId: foundUser._id
    }, JWT_SECRET);
    res.json({
        message: "User logged in!",
        jwt: token,
        email: foundUser.email
    });
}));
app.post("/api/v1/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, link } = req.body;
    contentModel_1.contentModel.create({
        title: title,
        link: link,
        // @ts-ignore
        userId: req.userId
    });
    res.json({
        message: "Content added successfully"
    });
}));
app.get("/api/v1/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // @ts-ignore
    const userId = req.userId;
    const contents = yield contentModel_1.contentModel.find({
        userId: userId
    }).populate("userId", "username");
    res.json({
        contents
    });
}));
app.delete("/api/v1/content", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const contentId = req.body.contentId;
    yield contentModel_1.contentModel.deleteOne({
        contentId,
        // @ts-ignore
        userId: req.userId
    });
    res.json({
        message: "Deleted!"
    });
}));
app.post("/api/v1/brain/share", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const share = req.body.share;
    if (share) {
        yield linkModel_1.LinkModel.create({
            // @ts-ignore
            userId: req.userId,
            hash: (0, generateHash_1.generateHash)(10)
        });
    }
    else {
        yield linkModel_1.LinkModel.deleteOne({
            // @ts-ignore
            userId: req.userId
        });
    }
    res.json({
        message: "Updated shareable link"
    });
}));
app.get("api/v1/brain/share/:shareLink", middleware_1.userMiddleware, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const share = req.params.shareLink;
    const link = yield linkModel_1.LinkModel.findOne({
        hash: share
    });
    if (!link) {
        res.status(400).json({
            message: "Bad Request!"
        });
        return;
    }
    const content = yield contentModel_1.contentModel.find({
        userId: link.userId
    });
    res.status(200).json({
        message: "Data fetched!",
        data: content
    });
}));
app.listen(3000, () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, db_1.default)();
    console.log("Server listening at 3000");
}));
app.get("/", (req, res) => {
    res.send("Hiii");
});
