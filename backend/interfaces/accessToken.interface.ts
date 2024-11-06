import {IUser} from "./user.interface";

export interface AccessTokenInterface {
    id: number,
    username: string,
    password: string,
    email: string,
    role: string,
    iat: number,
    exp: number

}