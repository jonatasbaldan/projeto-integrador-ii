import { Component, HostListener, OnInit } from '@angular/core';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { VaccineService } from 'src/app/services/vaccine.service';
import { ArrayUtils } from 'src/app/utils/ArrayUtils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isDesktop = false;
  isMobile = false;

  agendamentosMarcados: string = '';
  vacinasMarcadas: string = '';

  constructor(
    private agendamentoService: AgendamentoService,
    private vacinaService: VaccineService
  ) {
    this.agendamentosMarcados = ArrayUtils.arrayObjectsToStringWithBrackets(
      this.agendamentoService.getAgendamentosMarcados()
    );

    this.vacinasMarcadas = ArrayUtils.arrayObjectsToStringWithBrackets(
      this.vacinaService.getVacinasMarcadas()
    );
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

  getVacinas(): string {
    console.log(this.vacinasMarcadas);
    return this.vacinasMarcadas.toString();
  }

  getAgendamentos(): string {
    console.log(this.vacinasMarcadas);
    return this.agendamentosMarcados.toString();
  }
}
