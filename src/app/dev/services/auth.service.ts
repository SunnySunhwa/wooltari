import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { JwtHelper } from 'angular2-jwt';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/shareReplay';

import { environment } from '../../../environments/environment';

interface User {
  email: string;
  password: string;
}
interface Token {
  token: string;
}

@Injectable()
export class AuthService {
  appUrl = environment.appUrl;
  TOKEN_NAME = 'jwt_token';

  constructor(
    @Inject(HttpClient) private http: HttpClient,
    @Inject(JwtHelper) private jwtHelper: JwtHelper) {
    // console.log('[appUrl] ', this.appUrl);
  }

  signin(loginform): Observable<Token> {
    // const headers = new HttpHeaders ('')
    console.log(`${this.appUrl}`);
    return this.http.post<Token>(`${this.appUrl}/auth/login`, loginform, {})
      .do((res) => {
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
