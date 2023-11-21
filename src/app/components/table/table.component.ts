import { Component, Input, OnInit } from '@angular/core';
import { DataUtilsService } from 'src/app/utils/data-utils.service';
import { StringUtilsService } from 'src/app/utils/string-utils.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  @Input({
    alias: 'heads-name',
    required: true,
    transform: (value: string) =>
      value.replace(/\[|\]/g, '').replaceAll("'", '').split(','),
  })
  tableHeads: string[] = [];

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
          .split(',')
      );
    },
  })
  rows: string[][] = [];

  @Input({
    alias: 'table-type',
    required: true,
  })
  tableType: string = '';

  constructor(
    public stringUtils: StringUtilsService,
    public data: DataUtilsService
  ) {}

  ngOnInit(): void {}
}
