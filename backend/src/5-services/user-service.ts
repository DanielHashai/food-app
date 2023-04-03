import dal from "../2-utils/dal";
import { ValidationError } from "../3-middleware/error-model";
import CredentialsModel from "../4-models/credentials-model";
import UserModel from "../4-models/user.model";
import Jwt from "jsonwebtoken";
import { OkPacket } from "mysql";
import crypto from "../2-utils/crypto";
async function Login(user: CredentialsModel): Promise<UserModel> {

    user.password = crypto.createHashPassword(user.password);

    const sql = "SELECT * FROM users WHERE email=? AND password=?"
    const userContainer = await dal.execute(sql, user.email, user.password);

    const result = userContainer[0];
    if (userContainer[0].role == "Admin") {
        userContainer[0].isAdmin = true;


    }
    else {
        userContainer[0].isAdmin = false;
    }

    generateTokenResponse(result);


    return result;



}

async function getAllUsers(): Promise<UserModel[]> {
    const sql = "SELECT * FROM users ";

    const users = await dal.execute(sql);
    return users;
}


async function registerUser(user: UserModel): Promise<UserModel> {

    user.password = crypto.createHashPassword(user.password as string);


    const sql = "INSERT INTO users VALUES(DEFAULT,?,?,?,?,?)";

    const addedUserContainer: OkPacket = await dal.execute(sql, user.email, user.password, user.name, user.address, user.role);

    if (addedUserContainer.affectedRows === 0) {
        throw new ValidationError();
    }
    if (user.role == "Admin") {
        user.isAdmin = true;


    }
    else {
        user.isAdmin = false;
    }
    delete user.password;

    user.id = addedUserContainer.insertId;
    generateTokenResponse(user);

    return user;

}


function generateTokenResponse(user: UserModel) {
    const container = { user };

    // Create options:
    const options = { expiresIn: "3h" };

    // Create the token: 
    user.token = Jwt.sign(container, "Some Random Arrived!", options);


}
export default {
    Login,
    generateTokenResponse,
    registerUser,
    getAllUsers
}