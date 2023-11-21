import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Agendamento } from 'src/app/models/Agendamento';
import { Vacina } from 'src/app/models/Vacina';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { VaccineService } from 'src/app/services/vaccine.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isDesktop = false;
  isMobile = false;

  agendamentosMarcadosList: Agendamento[] = [];
  vacinasMarcadasList: Vacina[] = [];

  constructor(
    private agendamentoService: AgendamentoService,
    private vacinaService: VaccineService
  ) {}

  @HostListener('window:resize', ['$event'])
  ngOnInit(): void {
    this.isDesktop = window.innerWidth >= 768;
    this.isMobile = window.innerWidth < 768;

    this.getServicos(
      this.agendamentoService.getAgendamentosRequest(),
      this.agendamentosMarcadosList
    );

    this.getServicos(
      this.vacinaService.getVacinasRequest(),
      this.vacinasMarcadasList
    );
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktop = window.innerWidth >= 768;
    this.isMobile = window.innerWidth < 768;
  }

  getVacinas(): Vacina[] {
    const vacinasMarcadas: Vacina[] = [];
    this.vacinasMarcadasList.forEach((element) => {
      if (element.situacao === 'AGENDADO') vacinasMarcadas.push(element);
    });

    return vacinasMarcadas;
  }

  getAgendamentos(): Agendamento[] {
    const agendamentosMarcados: Agendamento[] = [];
    this.agendamentosMarcadosList.forEach((element) => {
      if (element.situacao === 'AGENDADO') agendamentosMarcados.push(element);
    });

    return agendamentosMarcados;
  }

  getServicos(
    callback: Observable<Object>,
    servicosList: Vacina[] | Agendamento[]
  ) {
    callback.subscribe({
      next: (res) => {
        const responseString: string = JSON.stringify(res);
        const responseJson: any = JSON.parse(responseString);
        responseJson.content.forEach((element: Agendamento & Vacina) => {
          servicosList.push(element);
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
}
