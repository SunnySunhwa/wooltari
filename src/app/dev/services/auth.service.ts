import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/shareReplay';

class SuccessLoginUser {
  constructor(
    public token: string,
    public user: {
      data_joined: string,
      email: string,
      is_active: boolean,
      pk: number,
      user_type: string
    }
  ) { }
}

class TryLoginUser {
  constructor(
    public email: string,
    public password: string
  ) { }
}

@Injectable()
export class AuthService {
  appUrl = environment.apiUrl;
  TOKEN_NAME = 'token';
  constructor( @Inject(HttpClient) private http: HttpClient) {
    console.log('[appUrl] ', this.appUrl);
  }
  signin(loginForm: TryLoginUser): Observable<SuccessLoginUser> {
    return this.http.post<SuccessLoginUser>(`${this.appUrl}/auth/login/`, loginForm)
      .do(res => {
        this.setToken(res.token);
        console.log(res);
      })
      .shareReplay();
  }

  // signout(): void {
  //   this.removeToken();
  // }

  // // 토큰 유효성 검증
  // isAuthenticated(): boolean {
  //   const token = this.getToken();
  //   return token ? !this.isTokenExpired(token) : false;
  // }

  // getToken(): string {
  //   return localStorage.getItem(this.TOKEN_NAME);
  // }

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_NAME, token);
  }

  // removeToken(): void {
  //   localStorage.removeItem(this.TOKEN_NAME);
  // }

  // /*
  //   token 유효 기간 체크
  //   The JwtHelper class has several useful methods that can be utilized in your components:

  //   decodeToken
  //   getTokenExpirationDate
  //   isTokenExpired

  //   npm install angular2-jwt
  //   https://github.com/auth0/angular2-jwt
  // */
  // isTokenExpired(token: string) {
  //   return this.jwtHelper.isTokenExpired(token);
  // }

  // getUserid(): string {
  //   return this.jwtHelper.decodeToken(this.getToken()).userid;
  // }
}
