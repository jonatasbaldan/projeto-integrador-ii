import { Component, Input, OnInit } from '@angular/core';
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
