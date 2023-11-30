import { Component, OnChanges, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Login } from 'src/app/models/Login';
import { LoginStatus } from 'src/app/models/login-status';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../../../css/form.css'],
})
export class LoginComponent implements OnInit {
  hasLoginError: boolean = false;

  currentStyles: Record<string, string> = {};

  loginForm = new FormGroup({
    cpf: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
      ],
      updateOn: 'change',
    }),
    senha: new FormControl('', {
      validators: [Validators.required, Validators.minLength(4)],
      updateOn: 'change',
    }),
  });

  constructor(private controller: LoginService) {}

  ngOnInit() {}

  setCurrentStyles() {
    this.currentStyles = {
      'border-color': this.hasLoginError ? '#a00c0c' : 'var(--gray)',
    };
  }

  logar() {
    const loginSchema: Login = this.loginForm.value as Login;

    this.controller.login(loginSchema.cpf, loginSchema.senha);

    this.controller.getStatus().subscribe({
      next: (res) => {
        console.log(res);
        if (res === LoginStatus.FAILED) {
          this.hasLoginError = true;
        }
        this.setCurrentStyles();
      },
    });
  }

  limparErros() {
    this.hasLoginError = false;
    this.setCurrentStyles();
  }

  get cpf() {
    return this.loginForm.get('cpf');
  }

  get senha() {
    return this.loginForm.get('senha');
  }
}
