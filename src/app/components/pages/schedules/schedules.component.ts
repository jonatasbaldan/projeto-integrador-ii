import { Component, HostListener, OnInit } from '@angular/core';
import { Agendamento } from 'src/app/models/Agendamento';
import { AgendamentoService } from 'src/app/services/agendamento.service';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css', '../../section.css'],
})
export class SchedulesComponent implements OnInit {
  isDesktop = false;
  isMobile = false;
  agendamentos: Agendamento[] = [];

  constructor(private agendamentoService: AgendamentoService) {}

  @HostListener('window:resize', ['$event'])
  ngOnInit(): void {
    console.log('hello from ng on init');
    this.isDesktop = window.innerWidth >= 768;
    this.isMobile = window.innerWidth < 768;

    this.agendamentoService.getAgendamentosRequest().subscribe({
      next: (res) => {
        const responseString: string = JSON.stringify(res);
        const responseJson: any = JSON.parse(responseString);
        responseJson.content.forEach((element: Agendamento) => {
          this.agendamentos.push(element);
        });
      },

      error: (err) => {
        console.log(err);
      },

      complete: () => {
        console.log('complete');
      },
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktop = window.innerWidth >= 768;
    this.isMobile = window.innerWidth < 768;
  }

  getAllAgendamentos(): Agendamento[] {
    console.log('getAllAgendamentos' + this.agendamentos);
    return this.agendamentos;
  }
}
