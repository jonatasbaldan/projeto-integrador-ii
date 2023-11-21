import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-schedule',
  templateUrl: './make-schedule.component.html',
  styleUrls: ['./make-schedule.component.css', '../../section.css'],
})
export class MakeScheduleComponent {
  modalClasses: string = 'modal --is-disable';

  constructor(private router: Router) {}

  efetuarCadastro() {
    this.modalClasses = 'modal --is-disable';
    this.router.navigate(['']);
  }

  mostrarMensagem(event: any) {
    event.preventDefault();
    this.modalClasses = 'modal --is-enable';
  }
}
