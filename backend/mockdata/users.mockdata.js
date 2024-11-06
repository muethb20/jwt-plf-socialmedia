"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersMockdata = void 0;
const role_enum_1 = require("../interfaces/role.enum");
exports.usersMockdata = [
    {
        id: 1,
        username: 'guestUser',
        password: 'password123',
        email: 'guest@example.com',
        role: role_enum_1.Role.GUEST
    },
    {
        id: 2,
        username: 'distributerUser',
        password: 'distributer456',
        email: 'distributer@example.com',
        role: role_enum_1.Role.DISTRIBUTOR
    }
];
