import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-membership',
  template: `
    <h1>Membership</h1>
    <div class="container">

      <div class="row profile">
        <h2>user name</h2>
        <div class="thumb">
          <div> Thumb img </div>
          <div> Your name will be located.</div>
          <i class="icon-edit">icon</i>
        </div>
      </div>

      <div class="row-user box-container">
        <div class="box-center">
          <div class="elem-user">
            <h4 class="elem-title">User Email</h4>
            <div class="elem-conts">
              <div class="input-email">
                Your email will be located.
              </div>
            </div>
          </div>

          <div class="elem-user">
            <h4 class="elem-title">Current Password</h4>
            <div class="input-password">
              <input type="password" name="userpassword" id="user-password" class="" placeholder="Enter Password">
            </div>
          </div>

          <div class="elem-user">
            <h4 class="elem-title">New Password</h4>
            <div class="new-password">
              <input type="password" name="newpassword" id="new-password" class="" placeholder="New Password">
              <div class="validation">새 비밀번호가 너무 취약합니다.</div>
            </div>
          </div>

          <div class="elem-user">
            <h4 class="elem-title">Comfirm Password</h4>
            <div class="confirm-password">
              <input type="password" name="checkpassword" id="check-password" class="" placeholder="Confirm New Password">
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
      </div>
    </div>
  `,
  styles: []
})
export class MembershipComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
