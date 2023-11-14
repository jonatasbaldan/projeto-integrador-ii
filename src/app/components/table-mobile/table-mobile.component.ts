import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-mobile',
  templateUrl: './table-mobile.component.html',
  styleUrls: ['./table-mobile.component.css'],
})
export class TableMobileComponent implements OnInit {
  @Input({
    required: true,
    transform: (value: string) => {
      let valuesTemp: string[] = value
        .substring(1, value.length - 1)
        .replaceAll("'", '')
        .split('],');

      return valuesTemp.map((v) =>
        v
          .substring(1, value.length - 1)
          .trim()
          .replace('[', '')
          .replace(']', '')
          .split(', ')
      );
    },
  })
  rows: string[][] = [];

  @Input({
    alias: 'table-type',
    required: true,
  })
  tableType: string = '';

  constructor() {}

  ngOnInit(): void {}
}