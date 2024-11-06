"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const jwt_service_1 = require("../services/jwt/jwt.service");
const posts_mockdata_1 = require("../mockdata/posts.mockdata");
let router = express_1.default.Router();
router.get('/', jwt_service_1.verifyToken, (req, res) => {
    const user = res.locals.user;
    const role = res.locals.role;
    const posts = posts_mockdata_1.mockPosts.filter(value => value.role == role);
    res.status(200).send(posts);
});
exports.default = router;
