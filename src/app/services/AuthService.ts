import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;
  private authTokenKey = 'auth_token';

  constructor() {
    this.isLoggedIn = !!sessionStorage.getItem(this.authTokenKey);
  }

  public isAuthenticated(): boolean {
    console.log(this.isLoggedIn);
    return this.isLoggedIn;
  }

  public setAuthToken(token: string): void {
    sessionStorage.setItem(this.authTokenKey, token);
    this.isLoggedIn = true;
  }

  public getAuthToken(): string | null {
    return sessionStorage.getItem(this.authTokenKey);
  }

  public logout(): void {
    sessionStorage.removeItem(this.authTokenKey);
    this.isLoggedIn = false;
  }
}
