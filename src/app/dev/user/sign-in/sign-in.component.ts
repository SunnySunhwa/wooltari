import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  template: `
    <h1>Sign in</h1>
    <div class="container">
      <h2>WOOLTARI</h2>
      <div class="logo">
        <img class="logo-image" src="" alt="Wooltari's logo">
      </div>
      
      <div class="box-container">
        <div class="box-center">
          <div class="right-elem">
            <div class="sign-up-link"><a href="#">Sign Up</a></div>
            <div class="sign-in-link"><a href="#">Sign In</a></div>
          </div>
          <div class="center-elem">
            <div class="input-email">
              <input type="email" name="useremail" id="user-email" class="">
              <label for="user-email">User Email</label>
            </div>
          </div>
          <div class="center-elem">
            <div class="input-password">
              <input type="password" name="userpassword" id="user-password" class="">
              <label for="user-password">User Password</label>
            </div>
          </div>
          <div class="remember-me">
            <input type="checkbox" class="remember-me-checkbox">
          </div>
        </div>
    </div>
    <div class="facebook-sign-in">Facebook sign in</div>
    <div class="google-sign-in">Google sign in</div>
  `,
  styles: []
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
