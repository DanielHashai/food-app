import dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import cors from "cors";
import userRouter from "./6-routes/user.router"
import foodRouter from "./6-routes/food.router";

import fileUpload from "express-fileupload";

const app = express();
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}))
app.use(express.json())
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
}));
app.use("/api/foods", foodRouter)
app.use("/api/users", userRouter);
app

const port = 5001;
app.listen(port, () => {
    console.log("Server running on http://localhost:" + port);

})
