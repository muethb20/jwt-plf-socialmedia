import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import {IUser} from "../../interfaces/user.interface";
import {Request, Response, NextFunction} from "express";
import {AccessTokenInterface} from "../../interfaces/accessToken.interface";
import {usersMockdata} from "../../mockdata/users.mockdata";
import {convertRoleStringToEnum} from "../util/util.service";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "SECRET_KEY";

export const generateToken = (payload: IUser, expiresIn: number) => {
    return jwt.sign(payload, JWT_SECRET, {expiresIn: expiresIn});
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1];


    if (token) {
        const accessToken: AccessTokenInterface = jwt.verify(token, JWT_SECRET) as AccessTokenInterface;

        const user: IUser = {
            username: accessToken.username,
            password: accessToken.password,
            id: accessToken.id,
            email: accessToken.email,
            role: convertRoleStringToEnum(accessToken.role)
        }

        req.body.user = user;

        next();
    }
    else{
        res.sendStatus(403);
    }
}