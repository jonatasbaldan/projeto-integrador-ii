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

  constructor(private http: HttpClient, private auth: AuthService) {
    const FULL_URL = `${API_URL}/vacinas`;

    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.auth.getAuthToken()}`,
    });

    this.http.get(FULL_URL, { headers: headers }).subscribe({
      next: (res) => {
        const responseString: string = JSON.stringify(res);
        const responseJson: any = JSON.parse(responseString);
        responseJson.content.forEach((element: Vacina) => {
          this.vacinas.push(element);
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

  getVacinas(): Vacina[] {
    console.log(this.vacinas);
    return this.vacinas;
  }

  getVacinasMarcadas(): Vacina[] {
    return this.vacinas.filter((vacina) => vacina.situacao === 'AGENDADO');
  }
}
