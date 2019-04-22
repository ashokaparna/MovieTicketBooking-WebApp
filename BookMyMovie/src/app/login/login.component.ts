import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {loginRequest} from '../Models/user';
import {LoginService} from '../Services/login.service';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  cookievalue = 'unknown';
  request: loginRequest = new loginRequest();
  loginService: LoginService;
  public loginForm: FormGroup;
  submitted = false;
  constructor(private lg: LoginService, private cookieService: CookieService, private router: Router) {
    this.loginService = lg;
  }
// constructor(){}
  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required)
    });
  }

  get f() { return this.loginForm.controls; }

  /*Submit button click function. This will check if the entered elements are valid. If they are valid it will post the contact.*/
  authenticate() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.request.username = this.loginForm.get('username').value;
    this.request.password = this.loginForm.get('password').value;
    this.loginService.login(this.request)
      .subscribe((result: any) => {
        debugger;
        this.cookieService.set( 'UserDetails', JSON.stringify(result) );
        console.log( JSON.stringify(result));
        this.cookievalue = this.cookieService.get('UserDetails');
        console.log(this.cookievalue)
        alert(result.message)
        this.router.navigate(['/dashboard', 2]);
    }, (error: any) => {
        console.log(error);
      });
  }

  forgotPassword(){
    this.router.navigate(['/forgotpassword']);
  }
}
