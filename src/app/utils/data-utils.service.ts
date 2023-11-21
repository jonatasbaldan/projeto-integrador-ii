import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataUtilsService {
  constructor() {}

  formatDate(date: string): string {
    const data: Date = new Date(date);
    return `${this.formatDay(data.getDate())}/${this.formatMonth(
      data.getMonth()
    )}/${data.getFullYear()}`;
  }

  private formatDay(day: number): string {
    const rightDay: number = day + 1;
    return rightDay < 10 ? `0${rightDay}` : '' + rightDay;
  }

  private formatMonth(month: number): string {
    const rightMonth: number = month + 1;
    return rightMonth < 10 ? `0${rightMonth}` : '' + rightMonth;
  }
}
