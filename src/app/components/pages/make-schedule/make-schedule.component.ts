import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-schedule',
  templateUrl: './make-schedule.component.html',
  styleUrls: [
    './make-schedule.component.css',
    '../../../css/section.css',
    '../../../css/form.css',
  ],
})
export class MakeScheduleComponent implements OnInit {
  modalClasses: string = 'modal --is-disable';
  public makeScheduleForm = new FormGroup({
    animais: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'change',
    }),
    tipoAgendamento: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'change',
    }),
    data: new FormControl('', {
      validators: [Validators.required],
      updateOn: 'change',
    }),
    descricao: new FormControl('', {
      updateOn: 'change',
    }),
  });

  constructor(private router: Router) {}
  ngOnInit(): void {}

  efetuarAgendamento() {
    this.modalClasses = 'modal --is-disable';
    this.router.navigate(['']);
  }

  mostrarMensagem(event: any) {
    event.preventDefault();
    this.modalClasses = 'modal --is-enable';
  }
}
