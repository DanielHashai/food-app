import crypto from "crypto";
import { Request } from "express";
import { ValidationError } from "../3-middleware/error-model";
import jwt, { JsonWebTokenError } from "jsonwebtoken";


function verifyPassword(request: Request): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        try {
            const header = request.header("authorization");
            if (!header) {
                reject(new ValidationError());
                return;
            }
            const token = header.substring(7);
            if (!token) {
                reject(new ValidationError());
                return;

            }
            const result = jwt.verify(token, "Daniel Hashai", (err: JsonWebTokenError) => {
                if (err) {
                    reject(new ValidationError());
                    return;
                }
                resolve(true)
            })
        }
        catch (err: any) {
            reject(err);
            return;
        }


    });



}




function createHashPassword(plainText: string): string {
    const salt = "Daniel Hashai";
    const hashedPassword = crypto.createHmac("sha512", salt).update(plainText).digest("hex");
    return hashedPassword;
}

export default { createHashPassword, verifyPassword }