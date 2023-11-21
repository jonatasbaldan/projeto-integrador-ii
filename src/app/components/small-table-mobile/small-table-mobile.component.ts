import { Component, Input, OnInit } from '@angular/core';
import { Agendamento } from 'src/app/models/Agendamento';
import { Vacina } from 'src/app/models/Vacina';
import { DataUtilsService } from 'src/app/utils/data-utils.service';

@Component({
  selector: 'app-small-table-mobile',
  templateUrl: './small-table-mobile.component.html',
  styleUrls: ['./small-table-mobile.component.css'],
})
export class SmallTableMobileComponent implements OnInit {
  @Input()
  title: String = '';

  @Input({
    required: true,
  })
  rows: Agendamento[] | Vacina[] | any = [];

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
