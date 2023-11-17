import { Component } from '@angular/core';
import { LoginControllerService } from 'src/app/services/login-controller.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private controller: LoginControllerService) {}

  logar() {
    console.log('logado');
    console.log(this.controller.login());
  }
}
