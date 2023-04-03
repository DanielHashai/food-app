import Joi from "joi";
import { ValidationError } from "../3-middleware/error-model";
class CredentialsModel {

    public email: string;
    public password: string;

    public constructor(credentials: CredentialsModel) {
        this.email = credentials.email;
        this.password = credentials.password;
    }

    private static CredentialsValidationSchema = Joi.object({
        email: Joi.string().min(5).max(30),
        password: Joi.string().min(2).max(100)
    })

    public validate() {
        const result = CredentialsModel.CredentialsValidationSchema.validate(this);
        if (result.error) {
            throw new ValidationError();
        }
    }

}
export default CredentialsModel