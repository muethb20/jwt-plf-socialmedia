import {Role} from "../../interfaces/role.enum";

export const createDate = (daysBefore: number):Date => {
    let date = new Date()
    date.setDate(date.getDate() - daysBefore)
    console.log(date);
    return date;
}

export const convertRoleStringToEnum = (roleStr: string): Role => {
    switch (roleStr.toLowerCase()) {
        case 'distributor': return Role.DISTRIBUTOR;
        default: return Role.GUEST;
    }
}

