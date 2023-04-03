import { UploadedFile } from "express-fileupload";

class FoodModel {
    public foodId: number;
    public name: string;
    public price: number;
    public tags?: string[];
    public favorite:number = 0;
    public stars: number=0;
    public image: UploadedFile;
    public imageUrl: string;
    public origins: string;
    public cookTime: string;
    public imageName: string;

    public constructor(food: FoodModel) {
        this.name = food.name;
        this.price = food.price;
        this.favorite = food.favorite;
        this.image = food.image;
        this.origins = food.origins;
        this.cookTime = food.cookTime;
        this.imageUrl = food.imageUrl;
    }

}




export default FoodModel;