import { Component, Input, OnInit } from '@angular/core';
import { Agendamento } from 'src/app/models/Agendamento';
import { Vacina } from 'src/app/models/Vacina';
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
  })
  rows: Vacina[] | Agendamento[] | any = [];

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
