import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/AuthService';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../section.css'],
})
export class HeaderComponent {
  constructor(private auth: AuthService, private router: Router) {}

  sair() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
