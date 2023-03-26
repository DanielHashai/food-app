import { Food } from "./Food";

export class CartItem {
    public quantity: number = 1;
    public price: number;
    public constructor(public food: Food) {
        this.price = this.food.price;
    }

}