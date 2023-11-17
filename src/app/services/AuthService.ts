import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;
  private authToken: string | null = null;

  constructor() {}

  // Verificar se o usuário está logado
  public isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  // Setar o token após o login
  public setAuthToken(token: string): void {
    this.authToken = token;
    this.isLoggedIn = true;
    // Aqui você pode guardar o token no localStorage ou sessionStorage
    // Exemplo: localStorage.setItem('token', token);
  }

  // Obter o token
  public getAuthToken(): string | null {
    return this.authToken;
  }

  // Método para fazer logout
  public logout(): void {
    this.isLoggedIn = false;
    this.authToken = null;
    // Limpar o token do localStorage ou sessionStorage
    // Exemplo: localStorage.removeItem('token');
  }
}
