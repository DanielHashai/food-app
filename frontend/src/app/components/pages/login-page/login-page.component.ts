import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  // when using FormGroup we need to import in app.module --> imports --> ReactiveFormsModule
  public loginForm: FormGroup;
  public isSubmitted = false;
  returnUrl = '';
  public constructor(private formBuilder: FormBuilder, private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {

  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
    // queryParams --> get all values after question mark (URL Above)
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl
  }
  // dor down here example: this.loginForm.controls.email 
  get fc() {
    return this.loginForm.controls;
  }
  public submit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid)
      return;
    this.userService.login({
      email: this.fc.email.value,
      password: this.fc.password.value
    }).then(() => {
      this.router.navigateByUrl(this.returnUrl);
    })
      .catch((err) => alert(err));
  }



}
