import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/shared/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public cartQuantity = 0;
  public user: User;
  public constructor(private cartService: CartService, private userService: UserService) {

  }
  ngOnInit(): void {
    this.cartService.getCartObservable().subscribe((newCart) => this.cartQuantity = newCart.totalCount);
    this.userService.userObservable.subscribe((newUser) => {
      this.user = newUser
    }) 

  }
  public logout() {
    this.userService.logout();
  }
  get isAuth() {
    return this.user.token; 
  }
}
