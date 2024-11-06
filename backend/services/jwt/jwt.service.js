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
    return jsonwebtoken_1.default.sign(payload, JWT_SECRET, { expiresIn: expiresIn });
};
exports.generateToken = generateToken;
const verifyToken = (req, res, next) => {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (token) {
        const accessToken = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        const user = {
            username: accessToken.username,
            password: accessToken.password,
            id: accessToken.id,
            email: accessToken.email,
            role: (0, util_service_1.convertRoleStringToEnum)(accessToken.role)
        };
        req.body.user = user;
        next();
    }
    else {
        res.sendStatus(403);
    }
};
exports.verifyToken = verifyToken;
