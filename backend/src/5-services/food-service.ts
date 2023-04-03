import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import imageHandler from "../2-utils/image-handler";
import { ValidationError } from "../3-middleware/error-model";
import FoodModel from "../4-models/food.model";
import OriginModel from "../4-models/origin-model";



async function getAllFood(): Promise<FoodModel[]> {
    const sql = "SELECT * FROM food ";
    const foods: FoodModel[] = await dal.execute(sql);
    return foods;
}

async function getFoodByParam(name: string): Promise<FoodModel[]> {
    const sql = "SELECT * FROM food WHERE LOWER(name) = ? ";
    const foodContainer = await dal.execute(sql, name.toLowerCase());
    if (!foodContainer) {
        throw new ValidationError();
    }
    return foodContainer;
}
async function getFoodByID(Id: number): Promise<FoodModel[]> {
    const sql = "SELECT * FROM food WHERE foodId = ? ";
    const foodContainer = await dal.execute(sql, Id);
    const resultFood = foodContainer[0];
    if (!resultFood) {
        throw new ValidationError();
    }
    return resultFood;
}

async function getAllOrigins(): Promise<OriginModel[]> {

    const sql = "SELECT * FROM origins";
    const origins = await dal.execute(sql);
    return origins;
}

async function addFood(food: FoodModel): Promise<FoodModel> {
    food.imageName = await imageHandler.saveImage(food.image);
    food.imageUrl = "/Users/daniel/Documents/Angular Store App/backend/src/1-assets/" + food.imageName;


    const origins = await getAllOrigins();
    const origin = origins.find((origin) => origin.country);


    const sql = "INSERT INTO food VALUES(DEFAULT,?,?,?,?,?,?,?)"
    const addedFoodContainer: OkPacket = await dal.execute(sql, food.name, food.price, food.favorite, origin.originId, food.stars, food.cookTime, food.imageName);
    food.foodId = addedFoodContainer.insertId;
    return food;

}


export default {
    getAllFood,
    getFoodByParam,
    getFoodByID,
    getAllOrigins,
    addFood

}