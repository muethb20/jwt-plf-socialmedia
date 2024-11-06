import {IUser} from "../../interfaces/user.interface.ts";

export const getUserFromToken = (token: string) : IUser=> {

    //const token = localStorage.getItem('accessToken');

    if (token){
        const user = JSON.parse(atob(token.split('.')[1])) as IUser;
        return user;
    } else throw new Error("Invalid JWT Token!");

}