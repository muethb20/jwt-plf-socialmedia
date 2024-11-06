import {IUser} from "./user.interface";

export interface AccessTokenInterface {
    exp:number,
    id: number,
    user: IUser
}