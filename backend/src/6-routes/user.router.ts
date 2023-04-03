import express, { Response, Request, NextFunction } from "express";

import jwt from "jsonwebtoken";
import CredentialsModel from "../4-models/credentials-model";
import service from "../5-services/user-service";
import UserModel from "../4-models/user.model";
const router = express.Router();



router.get
    ("/", async (req: Request, res: Response, next: NextFunction) => {
        const users = await service.getAllUsers();
        res.json(users);

    });


router.post
    ("/login", async (req: Request, res: Response, next: NextFunction) => {
        const user = new CredentialsModel(req.body);
        user.validate();
        const userResult = await service.Login(user);
        delete userResult.role;
        if (userResult) {
            res.send(userResult);
        }
        else
            res.status(400).send("Username or password invalid")
    });

router.post
    ("/register", async (req: Request, res: Response, next: NextFunction) => {
        const user = new UserModel(req.body);
        user.role = "User";
        user.validate();
        const userResult = await service.registerUser(user);
        console.log(userResult);

        if (userResult) {
            res.send(userResult);
        }
        else
            res.status(400).send("Username or password invalid")
    });


export default router;
