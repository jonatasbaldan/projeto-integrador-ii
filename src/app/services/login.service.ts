import { Injectable } from '@angular/core';
import { AuthService } from './AuthService';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../properties';
import { Login } from '../models/Login';
import { Router } from '@angular/router';
import { LoginStatus } from '../models/login-status';
import { Observable, Subject, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loginData: Login | any = {
    cpf: '',
    senha: '',
  };

  status: Subject<LoginStatus> = new Subject<LoginStatus>();

  constructor(
    private httpClient: HttpClient,
    private authService: AuthService,
    private router: Router
  ) {}

  getStatus(): Observable<LoginStatus> {
    return this.status.asObservable();
  }

  login(cpf: string = '', senha: string = '') {
    const FULL_URL: string = API_URL + '/login';

    this.loginData.cpf = cpf;
    this.loginData.senha = senha;

    this.httpClient.post(FULL_URL, this.loginData).subscribe({
      next: (res) => {
        const resToString: string = JSON.stringify(res);
        const resToJson: any = JSON.parse(resToString);
        this.authService.setAuthToken(resToJson.token);
        this.status.next(LoginStatus.SUCCESS);
        this.router.navigate(['/inicio']);
      },
      error: (err) => {
        this.status.next(LoginStatus.FAILED);
      },
    });
  }
}
