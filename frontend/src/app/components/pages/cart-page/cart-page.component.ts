import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/shared/models/Cart';
import { CartItem } from 'src/shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  public cart: Cart;
  //   this.cartService.getCartObservable().subscribe((cart) => this here is to get the current value of cart that is not located here on the cart page. Its like a global state (redux){
  public constructor(private cartService:CartService) {
    this.cartService.getCartObservable().subscribe((cart) => {
      this.cart = cart;
    })
  }
  ngOnInit(): void {

  }

  public removeFromCart(cartItem:CartItem) {
    this.cartService.removeFromCart(cartItem.food.foodId);
  }

  public changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.foodId, quantity);
  }
}
 