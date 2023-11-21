import { Component, Input, OnInit } from '@angular/core';
import { Agendamento } from 'src/app/models/Agendamento';
import { Vacina } from 'src/app/models/Vacina';
import { DataUtilsService } from 'src/app/utils/data-utils.service';

@Component({
  selector: 'app-small-table',
  templateUrl: './small-table.component.html',
  styleUrls: ['./small-table.component.css', '../section.css'],
})
export class SmallTableComponent implements OnInit {
  @Input({ required: true })
  title: string = '';

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
  rows: Vacina[] | Agendamento[] | any[] = [];

  @Input({ required: true })
  link: string = '';

  @Input({
    alias: 'link-name',
    required: true,
  })
  linkName: string = '';

  constructor(protected dataUtils: DataUtilsService) {}

  ngOnInit(): void {}
}
