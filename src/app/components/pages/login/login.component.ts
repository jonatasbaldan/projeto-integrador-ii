import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  cpf: string = '';
  senha: string = '';

  constructor(private controller: LoginService) {}

  logar() {
    console.log('logado');
    this.controller.login(this.cpf, this.senha);
    console.log(this.cpf);
    console.log(this.senha);
  }

  getCpf(value: string = '') {
    this.cpf = value;
  }

  getSenha(value: string = '') {
    this.senha = value;
  }
}
