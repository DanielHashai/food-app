import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/shared/models/User';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  public user = new User();

  public constructor(private service: UserService, private router: Router) { }

  ngOnInit(): void {


  }

  public async submit(): Promise<void> {
    this.service.RegisterUser(this.user);
    alert("New User was added successfully");
    this.router.navigateByUrl("/home");

  }
}
