"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const util_service_1 = require("../util/util.service");
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET || "SECRET_KEY";
const generateToken = (payload, expiresIn) => {
    return jsonwebtoken_1.default.sign(payload, JWT_SECRET);
};
exports.generateToken = generateToken;
const verifyToken = (req, res, next) => {
    var _a, _b;
    try {
        const accessToken = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(",")[0].split(" ")[1];
        console.log(accessToken);
        const roleToken = (_b = req.headers.authorization) === null || _b === void 0 ? void 0 : _b.split(",")[1].split(" ")[1];
        console.log(roleToken);
        if (accessToken) {
            const userToken = jsonwebtoken_1.default.verify(accessToken, JWT_SECRET);
            const user = {
                username: userToken.username,
                password: userToken.password,
                id: userToken.id,
                email: userToken.email,
                role: (0, util_service_1.convertRoleStringToEnum)(userToken.role)
            };
            res.locals.user = user;
        }
        else {
            res.status(403).send("Access token does not exist!");
        }
        if (roleToken) {
            res.locals.role = jsonwebtoken_1.default.verify(roleToken, JWT_SECRET);
        }
        else {
            res.status(403).send("Role token does not exist!");
        }
    }
    catch (error) {
        res.sendStatus(403);
    }
    next();
};
exports.verifyToken = verifyToken;
