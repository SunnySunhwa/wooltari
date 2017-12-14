import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidator } from '../password-validator';

@Component({
  selector: 'app-membership',
  template: `
    <h1>Membership</h1>
    <div class="container">
      <form [formGroup]="userForm" (ngSubmit)="onSubmit()" novalidate>
        <div class="row profile">
          <!-- 유저네임 뷰 -->
          <h2>user name</h2>
          <div class="thumb">
            <div> Thumb img </div>

            <input type="text" name="username" class="form-control" formControlName="userName" placeholer="Write your name">
            <em *ngIf="userName.errors?.required && userName.touched" class="">
              Enter your name!
            </em>
            <i class="icon-edit">icon</i>
          </div>
        </div>

        <div class="row box-container">
          <div class="box-center">
          <!-- 유저 이메일 뷰 -->
            <div class="elem">
              <h4 class="elem-title">User Email</h4>
              <div class="elem-conts">
                <div class="input-email">
                  Your email will be located.
                </div>
              </div>
            </div>
            <!-- 유저 비밀번호 입력창 -->
            <div formGroupName="passwordGroup">
              <div class="elem">
                <h4 class="elem-title">Current Password</h4>
                <div class="input-password">
                  <input type="password" name="userpassword" id="user-password" class="" placeholder="Enter Password">
                </div>
              </div>

              <div class="elem">
                <h4 class="elem-title">New Password</h4>
                <div class="new-password">
                  <input
                    type="password"
                    name="newpassword"
                    class="form-control"
                    formControlName="password"
                    placeholder="Enter New Password"
                  >
                  <em *ngIf="password.errors?.required && password.touched" class="">
                    Enter your New Password!
                  </em>
                </div>
              </div>

              <div class="elem">
                <h4 class="elem-title">Comfirm Password</h4>
                <div class="confirm-password">
                  <input
                    type="password"
                    name="confirmPassword"
                    class="form-control"
                    formControlName="confirmPassword"
                    placeholder="Confirm Password"
                  >
                  <em *ngIf="confirmPassword.errors?.required && confirmPassword.touched" class="">
                    Enter your password!
                  </em>
                  <em *ngIf="passwordGroup.errors?.match && confirmPassword.touched && !confirmPassword.error?.required" class="">
                    Match your password!
                  </em>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row box-footer">
          <div class="btn-set-wrapper">
            <button type="submit" class="btn btn-type1 bg-orange" [disabled]="userForm.invalid">Submit</button>
            <button class="btn btn-type1 bg-grey">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  `,
  styleUrls: ['../user-style.scss']
})
export class MembershipComponent implements OnInit {
  //서비스로 빼야 할 것 같은데 일단은 이렇게 작업해두자
  userForm: FormGroup;
  regexr = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

  constructor( @Inject(FormBuilder) private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      userEmail: ['', [
        Validators.required,
        Validators.pattern(this.regexr)
      ]],
      passwordGroup: this.fb.group({
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      }, { validator: PasswordValidator.match })
    });
  }

  get userName() {
    return this.userForm.get('userName');
  }
  get userEmail() {
    return this.userForm.get('userEmail');
  }
  get passwordGroup() {
    return this.userForm.get('passwordGroup');
  }
  get password() {
    return this.userForm.get('passwordGroup.password');
  }
  get confirmPassword() {
    return this.userForm.get('passwordGroup.confirmPassword');
  }

  onSubmit() {
    // 현재 그냥 리셋이지만 나중에 서버와 연결하여 json의 payload로 보내야 할 처리과정을 써야함
    this.userForm.reset();
  }

}
