import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cart } from 'src/shared/models/Cart';
import { CartItem } from 'src/shared/models/CartItem';
import { Food } from 'src/shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = this.getCartToLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() {}
  public addToCart(food: Food): void {
    let cartItem = this.cart.items.find(item => item.food.foodId === food.foodId);
    if (cartItem)
      return;
    this.cart.items.push(new CartItem(food));
    this.setCartToLocalStorage();
  }

  public removeFromCart(foodId: number): void {
    this.cart.items = this.cart.items.filter(item => item.food.foodId != foodId);
    this.setCartToLocalStorage();
  }

  public changeQuantity(foodId: number, quantity: number) {
    let cartItem = this.cart.items.find(item => item.food.foodId === foodId);
    if (!cartItem)
      return;
    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
    this.setCartToLocalStorage();
  }
  public clearCart(): void {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }
  public getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }
  private setCartToLocalStorage(): void {
    this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0)
    this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0)
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson); 
    this.cartSubject.next(this.cart);
  }
  private getCartToLocalStorage(): Cart {
    const cartJson = localStorage.getItem('Cart');
    return cartJson ? JSON.parse(cartJson) : new Cart()
  }
}
