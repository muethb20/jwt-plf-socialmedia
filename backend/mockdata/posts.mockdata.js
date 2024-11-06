"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockPosts = void 0;
const role_enum_1 = require("../interfaces/role.enum");
const util_service_1 = require("../services/util/util.service");
exports.mockPosts = [
    {
        postedAt: (0, util_service_1.createDate)(0),
        username: 'guestUser',
        msg: 'Heute habe ich einen neuen Beitrag gepostet.',
        role: role_enum_1.Role.GUEST
    },
    {
        postedAt: (0, util_service_1.createDate)(1),
        username: 'distributerUser',
        msg: 'Gestern war ein großartiger Tag zum Posten!',
        role: role_enum_1.Role.DISTRIBUTOR
    },
    {
        postedAt: (0, util_service_1.createDate)(2),
        username: 'guestUser',
        msg: 'Vor 2 Tagen habe ich an einem neuen Projekt gearbeitet.',
        role: role_enum_1.Role.GUEST
    },
    {
        postedAt: (0, util_service_1.createDate)(3),
        username: 'distributerUser',
        msg: 'Vor 3 Tagen haben wir ein neues Produkt eingeführt.',
        role: role_enum_1.Role.DISTRIBUTOR
    },
    {
        postedAt: (0, util_service_1.createDate)(4),
        username: 'guestUser',
        msg: 'Vor 4 Tagen war ein ruhiger Tag.',
        role: role_enum_1.Role.GUEST
    }
];
