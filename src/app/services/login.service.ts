import { Injectable } from '@angular/core';
import { AuthService } from './AuthService';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../properties';
import { Login } from '../models/Login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loginData: Login | any = {
    cpf: '',
    senha: '',
  };

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  login(cpf: string = '', senha: string = '') {
    console.log('hello');
    const loginPrefix: string = API_URL + '/login';
    this.loginData.cpf = cpf;
    this.loginData.senha = senha;
    this.httpClient.post(loginPrefix, this.loginData).subscribe({
      next: (res) => {
        const resToString: string = JSON.stringify(res);
        const resToJson: any = JSON.parse(resToString);
        this.authService.setAuthToken(resToJson.token);
        this.router.navigate(['/inicio']);
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}
