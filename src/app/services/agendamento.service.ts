import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Agendamento } from '../models/Agendamento';
import { API_URL } from '../properties';
import { AuthService } from './AuthService';

@Injectable({
  providedIn: 'root',
})
export class AgendamentoService implements OnInit {
  private agendamentos: Agendamento[] = [];

  constructor(private http: HttpClient, private auth: AuthService) {}

  ngOnInit() {}

  getAgendamentos(): Agendamento[] {
    return this.agendamentos;
  }

  getAgendamentosRequest() {
    const FULL_URL = `${API_URL}/agendamento`;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.auth.getAuthToken()}`,
    });

    return this.http.get(FULL_URL, { headers: headers });
  }

  getAgendamentosMarcados(): Agendamento[] {
    return this.agendamentos.filter(
      (agendamento) => agendamento.situacao === 'AGENDADO'
    );
  }
}
