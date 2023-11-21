import { Component, Input, OnInit } from '@angular/core';
import { Agendamento } from 'src/app/models/Agendamento';
import { Vacina } from 'src/app/models/Vacina';
import { DataUtilsService } from 'src/app/utils/data-utils.service';
import { StringUtilsService } from 'src/app/utils/string-utils.service';

@Component({
  selector: 'app-table-mobile',
  templateUrl: './table-mobile.component.html',
  styleUrls: ['./table-mobile.component.css'],
})
export class TableMobileComponent implements OnInit {
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
    protected dataUtils: DataUtilsService,
    protected stringUtils: StringUtilsService
  ) {}

  ngOnInit(): void {}
}
