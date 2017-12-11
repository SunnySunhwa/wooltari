import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  template: `
    <h1>Sign in</h1>
    <div class="container">
      <div class="row profile">
        <h2>WOOLTARI</h2>
        <div class="logo">
          <div> logo img </div>
          <img class="logo-image" src="" alt="Wooltari's logo">
        </div>
      </div>

      <div class="row box-container">
        <div class="box-center">
          <div class="right-side">
            <div class="elem">
              <div class="elem-conts">
                <span class="sign-up-link"><a href="#">Sign Up</a></span>
                <span class="sign-in-link"><a href="#">Sign In</a></span>
              </div>
            </div>
          </div>

          <div class="elem">
            <div class="elem-conts">
              <div class="input-email">
                <input type="email" name="useremail" id="user-email" class="input-form" placeholder="iLovePets@example.com">
              </div>
            </div>
          </div>

          <div class="elem">
            <div class="elem-conts">
              <div class="input-password">
                <input type="password" name="userpassword" id="user-password" class="input-form" placeholder="Enter Password">
              </div>
            </div>
          </div>

          <div class="elem">
            <div class="remember-me">
              <input type="checkbox" class="remember-me-checkbox">
              <span>Remeber me</span>
            </div>
          </div>

          <div class="facebook-sign-in">Facebook sign in</div>
          <div class="google-sign-in">Google sign in</div>
        </div>
      </div>

      <div class="row box-footer">
        <div class="btn-set-wrapper">
          <button class="btn btn-type1 bg-main">Submit</button>
          <button class="btn btn-type1 bg-grey">Cancel</button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['../user-style.scss']
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
