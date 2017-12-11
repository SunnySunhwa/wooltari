import { AbstractControl } from '@angular/forms';

export class PasswordValidator {

  static match(form: AbstractControl) {
    // 매개변수로 전달받은 검증 대상 폼 모델에서 password와 confirmPassword를 취득
    const password = form.get('password').value;
    const confirmPassword = form.get('confirmPassword').value;

    // password와 confirmPassword와 값을 비교한다.
    if (password !== confirmPassword) {
      return { match: { password, confirmPassword } };
    } else {
      return null;
    }
  }
}
