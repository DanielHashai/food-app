import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';

import { BehaviorSubject, firstValueFrom, Observable } from 'rxjs';
import { USER_LOGIN_URL, USER_Register_URL } from 'src/shared/constants/urls';
import { IUserLogin } from 'src/shared/interfaces/IUserLogin';
import { User } from 'src/shared/models/User';
const USER_KEY = 'User';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable: Observable<User>;
  constructor(private http: HttpClient) {
    this.userObservable = this.userSubject.asObservable();
  }
  // Here we use tap to we will get back from the server an observable a not a subscription 
  public async login(userLogin: IUserLogin): Promise<User> {
    const obs = this.http.post<User>(USER_LOGIN_URL, userLogin);
    const result = await firstValueFrom(obs);
    this.userSubject.next(result);
    this.setUserToLocalStorage(result);
    return result;
  }

  public async RegisterUser(user: User): Promise<User> {
    const addedUserObs = this.http.post<User>(USER_Register_URL, user);
    const addedUser = await firstValueFrom(addedUserObs);
    this.userSubject.next(addedUser);
    this.setUserToLocalStorage(addedUser);
    return addedUser;
  }

  public logout() {
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    window.location.reload();
  }

  private setUserToLocalStorage(user: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage(): User {
    const userJson = localStorage.getItem(USER_KEY);
    if (userJson) return JSON.parse(userJson) as User;
    return new User();
  }

}
