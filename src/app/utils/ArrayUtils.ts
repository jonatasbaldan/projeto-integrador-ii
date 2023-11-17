import { Agendamento } from '../models/Agendamento';
import { Vacina } from '../models/Vacina';

export class ArrayUtils {
  static arrayObjectsToStringWithBrackets(
    arr: Agendamento[] | Vacina[]
  ): string {
    return '[' + arr.map((obj) => '[' + Object.values(obj) + ']') + ']';
  }
}
