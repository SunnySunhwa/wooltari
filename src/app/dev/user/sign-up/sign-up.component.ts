import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  template: `
    <h1>Sign up</h1>
    
    <div class="profile">
      <img class="profile-image" src="" alt="profile-image-preview">
    </div>
    
    <div class="sign-up card-section">
      <div class="sign-up-link"><a href="#">Sign Up</a></div>
      <div class="sign-in-link"><a href="#">Sign In</a></div>
      
      <div class="input-email">
        <label for="user-email">User Email</label>
        <input type="email" name="useremail" id="user-email" class="">
      </div>
      <div class="input-password">
        <label for="user-password">Password</label>
        <input type="password" name="userpassword" id="user-password" class="">
      </div>
      <div class="confirm-password">
        <label for="check-password">Confirm Password</label>
        <input type="password" name="checkpassword" id="check-password" class="">
      </div>
      
      <button class="btn-sign-in">Submit</button>
      <button class="btn-cancel">Cancel</button>
    </div>
  `,
  styles: []
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
