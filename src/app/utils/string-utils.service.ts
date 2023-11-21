import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StringUtilsService {
  constructor() {}

  toLowerCase(element: string): string {
    return element !== undefined ? element.toLowerCase() : element;
  }
}
