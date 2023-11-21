import { Injectable } from '@angular/core';
import { Vacina } from '../models/Vacina';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './AuthService';
import { API_URL } from '../properties';

@Injectable({
  providedIn: 'root',
})
export class VaccineService {
  private vacinas: Vacina[] = [];

  constructor(private http: HttpClient, private auth: AuthService) {}

  getVacinasRequest() {
    const FULL_URL = `${API_URL}/vacinas`;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.auth.getAuthToken()}`,
    });

    return this.http.get(FULL_URL, { headers: headers });
  }

  getVacinasMarcadas(): Vacina[] {
    return this.vacinas.filter((vacina) => vacina.situacao === 'AGENDADO');
  }
}
