import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import {IUser} from "../../interfaces/user.interface";
import {Request, Response, NextFunction} from "express";
import {AccessTokenInterface} from "../../interfaces/accessToken.interface";
import {usersMockdata} from "../../mockdata/users.mockdata";
import {convertRoleStringToEnum} from "../util/util.service";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "SECRET_KEY";

export const generateToken = (payload: any, expiresIn?: number) => {
    return jwt.sign(payload, JWT_SECRET);
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    try {

    const accessToken = req.headers.authorization?.split(",")[0].split(" ")[1];

    console.log(accessToken)
    const roleToken = req.headers.authorization?.split(",")[1].split(" ")[1];
    console.log(roleToken)


    if (accessToken) {
        const userToken: AccessTokenInterface = jwt.verify(accessToken, JWT_SECRET) as AccessTokenInterface;

        const user: IUser = {
            username: userToken.username,
            password: userToken.password,
            id: userToken.id,
            email: userToken.email,
            role: convertRoleStringToEnum(userToken.role)
        }

        res.locals.user = user;

    }
    else{
        res.status(403).send("Access token does not exist!");
    }

    if (roleToken) {
        res.locals.role = jwt.verify(roleToken, JWT_SECRET);
    } else {
        res.status(403).send("Role token does not exist!")
    }
    } catch (error) {
        res.sendStatus(403);
    }


    next();

}