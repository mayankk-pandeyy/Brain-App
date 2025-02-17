import { NextFunction, Request, Response, } from "express";
import jwt from 'jsonwebtoken';


export const userMiddleware = async (req : Request, res : Response, next : NextFunction) => {
    const token = String(req.headers.token);
    const decoded =  await jwt.verify(token, "mayank");
    if(decoded){
        // @ts-ignore
        req.userId = decoded.userId;
        next();
    }else{
        res.status(403).json({
            message : "You are not logged in!"
        })
    }
}