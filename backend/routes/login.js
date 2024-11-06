"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jwt_service_1 = require("../services/jwt/jwt.service");
const users_mockdata_1 = require("../mockdata/users.mockdata");
let router = express_1.default.Router();
router.post('/', (req, res) => {
    let user = req.body;
    user = users_mockdata_1.usersMockdata.find(u => u.username == (user === null || user === void 0 ? void 0 : user.username) && u.password == u.password);
    if (user) {
        res.status(200).send((0, jwt_service_1.generateToken)(user, 100000));
    }
    else {
        res.sendStatus(401);
    }
});
exports.default = router;
