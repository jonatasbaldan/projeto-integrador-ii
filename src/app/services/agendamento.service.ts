import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Agendamento } from '../models/Agendamento';
import { API_URL } from '../properties';
import { AuthService } from './AuthService';

@Injectable({
  providedIn: 'root',
})
export class AgendamentoService {
  private agendamentos: Agendamento[] = [];

  constructor(private http: HttpClient, private auth: AuthService) {
    const FULL_URL = `${API_URL}/agendamento`;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.auth.getAuthToken()}`,
    });

    this.http.get(FULL_URL, { headers: headers }).subscribe({
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

  getAgendamentos(): Agendamento[] {
    return this.agendamentos;
  }

  getAgendamentosMarcados(): Agendamento[] {
    return this.agendamentos.filter(
      (agendamento) => agendamento.situacao === 'AGENDADO'
    );
  }
}
