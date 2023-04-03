import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  public constructor(private cartService: CartService, private userService: UserService, private router: Router) {

  }
  ngOnInit(): void {
    this.cartService.getCartObservable().subscribe((newCart) => this.cartQuantity = newCart.totalCount);
    this.userService.userObservable.subscribe((newUser) => {

      this.user = newUser
    })

  }
  public logout() {
    this.userService.logout();
    this.cartService.clearCart();
    this.router.navigateByUrl("/login");

  }
  get isAuth() {
    return this.user.token;
  }

  public checkIfAdmin() {
    return this.user.isAdmin;
  }


}
