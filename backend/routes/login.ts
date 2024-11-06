import express, {Request, Response} from 'express'
import {generateToken, verifyToken} from "../services/jwt/jwt.service";
import {IUser} from "../interfaces/user.interface";
import {usersMockdata} from "../mockdata/users.mockdata";

let router = express.Router();

router.post('/',(req: Request, res: Response): void => {
    let user: IUser | undefined = req.body as IUser

    user = usersMockdata.find(u => u.username == user?.username && u.password == u.password);

    if (user) {
        res.status(200).send(generateToken(user, 100000));
    } else {
        res.sendStatus(401)
    }
});


export default router;