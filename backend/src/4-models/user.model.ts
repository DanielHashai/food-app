
import Joi from "joi";
class UserModel {
    public id: number;
    public email: string;
    public password: String;
    public name: string;
    public address: string;
    public role: string;
    public isAdmin: boolean = false;
    public token: string;

    public constructor(user: UserModel) {
        this.id = user.id;
        this.email = user.email;
        this.password = user.password;
        this.name = user.name;
        this.address = user.address;
        this.role = user.role
        this.isAdmin = user.isAdmin;
    }

    public static ValidationSchema = Joi.object({
        id: Joi.number().optional(),
        email: Joi.string().required(),
        password: Joi.string().required(),
        name: Joi.string().min(2).max(30).required(),
        address: Joi.string().min(2).max(30).required(),
        role: Joi.string().optional(),
        isAdmin: Joi.boolean().optional()
    })

    public validate(): void {
        const result = UserModel.ValidationSchema.validate(this);
        if (result.error)
            throw new Error("Invalid validation");
    }

}

export default UserModel;
