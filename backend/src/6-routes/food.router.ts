import express, { Response, Request, NextFunction } from "express";

import service from "../5-services/food-service";
import FoodModel from "../4-models/food.model";
import imageHandler from "../2-utils/image-handler";

const router = express.Router();





router.get
    ("/", async (req: Request, res: Response, next: NextFunction) => {
        const allFood = await service.getAllFood();
        res.json(allFood);
    });
router.post
    ("/", async (req: Request, res: Response, next: NextFunction) => {


        req.body.image = req.files?.image;
        const addMeal = new FoodModel(req.body);
        addMeal.favorite = 0;


        const result = await service.addFood(addMeal);
        res.json(result);
    });
router.get
    ("/image/:imageName", async (req: Request, res: Response, next: NextFunction) => {
        const imageName = req.params.imageName;
        const path = "/Users/daniel/Documents/Angular Store App/backend/src/1-assets/" + imageName;

        res.sendFile(path);
    });
router.get("/search/:searchTerm", async (req: Request, res: Response, next: NextFunction) => {
    const searchTerm = req.params.searchTerm;
    const foods = await service.getFoodByParam(searchTerm);
    res.json(foods)
});

router.get
    ("/origins", async (req: Request, res: Response, next: NextFunction) => {
        const origins = await service.getAllOrigins();
        res.json(origins);

    });


router.get
    ("/:foodId", async (req: Request, res: Response, next: NextFunction) => {
        const foodId = req.params.foodId;
        const foodClickedOn = await service.getFoodByID(+foodId);
        res.json(foodClickedOn);

    });





export default router;