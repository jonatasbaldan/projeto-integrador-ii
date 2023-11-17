import { Injectable } from '@angular/core';
import { AuthService } from './AuthService';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../properties';
import { Login } from '../models/Login';

@Injectable({
  providedIn: 'root',
})
export class LoginControllerService {
  loginData: Login | any = {
    cpf: '',
    senha: '',
  };

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService
  ) {}

  login(cpf: string = '', senha: string = '') {
    const loginPrefix: string = API_URL + '/login';
    this.loginData.cpf = cpf;
    this.loginData.senha = senha;
    return this.httpClient.post(loginPrefix, this.loginData);
  }
}
