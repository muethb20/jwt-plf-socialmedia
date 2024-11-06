import express, {Request, Response} from 'express'
import {verifyToken} from "../services/jwt/jwt.service";
import {IUser} from "../interfaces/user.interface";
import {mockPosts} from "../mockdata/posts.mockdata";

let router = express.Router();

router.get('/', verifyToken,(req: Request, res: Response): void => {
    const user = res.locals.user as IUser
    const role = res.locals.role;
    const posts = mockPosts.filter(value => value.role == role);

    res.status(200).send(posts);
});


export default router;