import { CartItem } from "./CartItem";

export class Cart {
    public items: CartItem[] = [];
    public totalPrice: number = 0;
    public totalCount: number = 0;
}