import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  public getToken(): string {
    return localStorage.getItem('XSRF-TOKEN');
  }

  public isAuthenticated(): boolean {
    const token = this.getToken();
    return this.tokenNotExpired(null, token);
  }

  tokenNotExpired(arg1, token): boolean {
    return true;
  }

}
