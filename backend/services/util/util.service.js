"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertRoleStringToEnum = exports.createDate = void 0;
const role_enum_1 = require("../../interfaces/role.enum");
const createDate = (daysBefore) => {
    let date = new Date("06.11.2024");
    return date;
};
exports.createDate = createDate;
const convertRoleStringToEnum = (roleStr) => {
    switch (roleStr.toLowerCase()) {
        case 'distributor': return role_enum_1.Role.DISTRIBUTOR;
        default: return role_enum_1.Role.GUEST;
    }
};
exports.convertRoleStringToEnum = convertRoleStringToEnum;
