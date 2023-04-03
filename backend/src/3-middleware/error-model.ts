class ErrorModel {
    public constructor(private status: number, private message: string) {
    }
}

export class ValidationError extends ErrorModel {
    public constructor() {
        super(404, "Invalid email or password")
    }
}