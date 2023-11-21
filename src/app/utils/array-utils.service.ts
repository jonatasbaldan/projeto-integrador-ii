import { Injectable } from '@angular/core';
import { Agendamento } from '../models/Agendamento';
import { Vacina } from '../models/Vacina';

@Injectable({
  providedIn: 'root',
})
export class ArrayUtilsService {
  arrayObjectsToStringWithBrackets(arr: Agendamento[] | Vacina[]): string {
    return '[' + arr.map((obj) => '[' + Object.values(obj) + ']') + ']';
  }
}
