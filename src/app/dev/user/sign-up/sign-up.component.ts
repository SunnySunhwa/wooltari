import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  template: `
    <h1>Sign up</h1>
    <div class="container">

      <div class="row profile">
        <h2>user name</h2>
        <div class="thumb">
          <div> Thumb img </div>
          <input type="text" placeholder="Write your name">
          <i class="icon-edit">icon</i>
        </div>
      </div>

      <div class="row-user box-container">
        <div class="box-center">
          <div class="right-side">
            <div class="elem-user">
              <div class="elem-conts">
                <span class="sign-up-link"><a href="#">Sign Up</a></span>
                <span class="sign-in-link"><a href="#">Sign In</a></span>
              </div>
            </div>
          </div>
          <div class="elem-user">
            <h4 class="elem-title">User Email</h4>
            <div class="elem-conts">
              <div class="input-email">
                <input type="email" name="useremail" id="user-email" class="" placeholder="iLovePets@example.com">
                <div class="validation">이메일 형식에 맞춰주세요.</div>
              </div>
            </div>
          </div>

          <div class="elem-user">
            <h4 class="elem-title">Password</h4>
            <div class="input-password">
              <input type="password" name="userpassword" id="user-password" class="" placeholder="Enter Password">
              <div class="validation">너무 취약한 비번인걸요.</div>
            </div>
          </div>

          <div class="elem-user">
            <h4 class="elem-title">Comfirm Password</h4>
            <div class="confirm-password">
              <input type="password" name="checkpassword" id="check-password" class="" placeholder="Confirm Password">
              <div class="validation">비밀번호가 같지 않습니다.</div>
            </div>
          </div>
        </div>
      </div>

      <div class="row box-footer">
        <div class="btn-set-wrapper">
          <button class="btn btn-type1 bg-main">Submit</button>
          <button class="btn btn-type1 bg-grey">Cancel</button>
        </div>
      </div> <!-- // box-footer -->
    </div>
  `,
  styles: []
})
export class SignUpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
