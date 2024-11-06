import {IUser} from "../interfaces/user.interface";
import {Role} from "../interfaces/role.enum";

export const usersMockdata: IUser[] = [
    {
        id: 1,
        username: 'guestUser',
        password: 'password123',
        email: 'guest@example.com',
        role: Role.GUEST
    },
    {
        id: 2,
        username: 'distributerUser',
        password: 'distributer456',
        email: 'distributer@example.com',
        role: Role.DISTRIBUTOR
    }
];