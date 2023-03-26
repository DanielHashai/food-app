import express, { Request, Response } from "express";
import cors from "cors";
import { sample_foods, sample_tag, sample_users } from "./data";
import jwt from "jsonwebtoken";
const app = express();
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}))
app.use(express.json())
app.get
    ("/api/foods", async (req: Request, res: Response) => {
        res.send(sample_foods)
    });

app.get("/api/foods/search/:searchTerm", (req: Request, res: Response) => {
    const searchTerm = req.params.searchTerm;
    const foods = sample_foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
    res.send(foods)
});
app.get
    ("/api/foods/tags", async (req: Request, res: Response) => {
        res.send(sample_tag)
    });
app.get
    ("/api/foods/tag/:tagName", async (req: Request, res: Response) => {
        const allFoodsByTag = sample_foods.filter(food =>
            food.tags?.includes(req.params.tagName)
        )
        res.send(allFoodsByTag)
    });

app.get
    ("/api/foods/:foodId", async (req: Request, res: Response) => {
        const foodId = req.params.foodId;
        const foodClickedOn = sample_foods.find(food => food.id == foodId);
        // res.sendStatus(200).json(foodClickedOn);
        res.send(foodClickedOn);
    });
app.post
    ("/api/users/login", async (req: Request, res: Response) => {
        const { email, password } = req.body;
        console.log(req.body);

        const user = sample_users.find(user => user.email === email && user.password === password);
        if (user) {
            res.send(generateTokenResponse(user));
        }
        else
            res.status(400).send("Username or password invalid")
    });
const generateTokenResponse = (user: any) => {
    const token = jwt.sign({
        email: user.email, isAdmin: user.isAdmin
    }, "Some Random Arrived!", {
        expiresIn: "30d"
    })
    user.token = token;
    return user;

}



const port = 5001;
app.listen(port, () => {
    console.log("Server running on http://localhost:" + port);

})
