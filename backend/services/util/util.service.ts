import {Role} from "../../interfaces/role.enum";

export const createDate = (daysBefore: number):Date => {
    let date = new Date("06.11.2024")
    return date;
}

export const convertRoleStringToEnum = (roleStr: string): Role => {
    switch (roleStr.toLowerCase()) {
        case 'distributor': return Role.DISTRIBUTOR;
        default: return Role.GUEST;
    }
}

