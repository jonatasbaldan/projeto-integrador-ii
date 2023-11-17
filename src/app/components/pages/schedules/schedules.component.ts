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
  agendamentos: string = '';

  constructor(private agendamentoService: AgendamentoService) {
    this.agendamentos = this.arrayObjectsToStringWithBrackets(
      this.agendamentoService.getAgendamentos()
    );
    console.log('asdf' + this.agendamentos);
  }

  @HostListener('window:resize', ['$event'])
  ngOnInit(): void {
    this.isDesktop = window.innerWidth >= 768;
    this.isMobile = window.innerWidth < 768;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktop = window.innerWidth >= 768;
    this.isMobile = window.innerWidth < 768;
  }

  getAllAgendamentos(): string {
    console.log('hero');
    console.log(this.agendamentos.toString());
    return this.agendamentos.toString();
  }

  arrayObjectsToStringWithBrackets(arr: Agendamento[]): string {
    return '[' + arr.map((obj) => '[' + Object.values(obj) + ']') + ']';
  }
}
