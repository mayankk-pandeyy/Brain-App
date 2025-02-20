import express from "express"
import {z} from "zod";
import bcrypt from "bcrypt"
import { userModel } from "./models/userModel";
import jwt from "jsonwebtoken"
import connectWithDb from "./database/db";
import { userMiddleware } from "./middlewares/middleware";
import { contentModel } from "./models/contentModel";
import { LinkModel } from "./models/linkModel";
import { generateHash } from "./controllers/generateHash";
import cors from "cors";


const app = express();

app.use(express.json());
app.use(cors());

const JWT_SECRET = "mayank";

app.post("/api/v1/signup", async (req, res)=>{
    try{
        const {firstName, lastName, email, username, password} = req.body;
   
        // ZOD Validation
        const validData = z.object({
            email : z.string().min(3).max(100).email(),
            firstName : z.string().min(3).max(20),
            lastName : z.string().min(3).max(20),
            username : z.string().min(3).max(20),
            password : z.string().min(3).max(100)
        })
    
        const parsedData = validData.safeParse(req.body);
    
        if(!parsedData.success){
            res.status(400).json({
                message : "Incorrect format!",
                error : parsedData.error
            })
            return;
        }
    
        // Hashing the passoword
        const hashedPass = await bcrypt.hash(password , 5);
    
        const response = {
            firstName : firstName,
            lastName : lastName,
            email : email,
            password : hashedPass,
            username : username
        }
    
        console.log(response);
    
        await userModel.create(response);
    
        res.json({
            message : "User signed up!"
        })
    }catch(e){
        res.status(411).json({
            message : "User already exists"
        })
    }
});

app.post("/api/v1/signin", async (req, res)=>{
    const {username, password} = req.body;

    let foundUser = null;

    foundUser = await userModel.findOne({username : username});

    if(foundUser == null){
        res.json({
            message : "User not found!"
        })
        return ;
    }

    const hash = foundUser.password;

    let matchPass = await bcrypt.compare(password, hash);

    if(!matchPass){
        res.json({
            message : "Password is INCORRECT!"
        })
        return ;
    }

    let token = await jwt.sign({
        userId : foundUser._id
    }, JWT_SECRET);

    res.json({
        message : "User logged in!",
        jwt : token,
        email : foundUser.email
    })
});

app.post("/api/v1/content", userMiddleware,async (req, res)=>{

    const {title, link} = req.body;

    contentModel.create({
        title : title,
        link : link,
        // @ts-ignore
        userId : req.userId
    })

    res.json({
        message : "Content added successfully"
    })

});

app.get("/api/v1/content", userMiddleware, async (req, res)=>{
    // @ts-ignore
    const userId = req.userId;

    const contents = await contentModel.find({
        userId : userId
    }).populate("userId", "username")

    res.json({
        contents
    })
});


app.delete("/api/v1/content", userMiddleware, async(req, res)=>{
    const contentId = req.body.contentId;

    await contentModel.deleteOne({
        contentId,
        // @ts-ignore
        userId : req.userId
    })

    res.json({
        message : "Deleted!"
    })
});

app.post("/api/v1/brain/share", userMiddleware, async (req, res)=>{
    const share = req.body.share;
   
    if(share){
        try{
            let exists = null;
            exists =  await LinkModel.findOne({
                // @ts-ignore
                userId : req.userId
            })

            if(exists){
                res.json({
                    message : "Link Created!",
                    link : `/share/${exists.hash}`
                })
                return ;
            }
            const hash = generateHash(10);
            await LinkModel.create({
                // @ts-ignore
                userId : req.userId,
                hash : hash
            })

            res.json({
                message : "Link Created!",
                link : `/share/${hash}`
            })
        }catch(e){
            res.json({
                message : e
            })
        }
    }else{
        await LinkModel.deleteOne({
            // @ts-ignore
            userId : req.userId
        })

        res.json({
            message : "Link Deleted!"
        })
    }

});

app.get("/api/v1/brain/share/:shareLink", async (req, res)=> {
    const share = req.params.shareLink;

    const link = await LinkModel.findOne({
        hash : share
    })

    if(!link){
        res.status(400).json({
            message : "Bad Request!"
        })
        return ;
    }

    const content = await contentModel.find({
        userId : link.userId
    })

    res.status(200).json({
        message : "Data fetched!",
        data : content
    })
})

app.listen(3000, async () => {
    await connectWithDb();
    console.log("Server listening at 3000");
})

app.get("/", (req, res)=>{
    res.send("Hiii");
});