import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-table',
  templateUrl: './small-table.component.html',
  styleUrls: ['./small-table.component.css','../section.css']
})

export class SmallTableComponent implements OnInit {

  @Input({required: true})
  title: string = '';

  @Input({
    alias: 'heads-name',
    required: true,
    transform: (value: string) => value
    .replace(/\[|\]/g,'')
    .replaceAll("'", '')
    .split(',')
  })
  tableHeads: string[] = [];

  @Input({
    required: true,
    transform: (value: string) => {
      let valuesTemp: string[] = value
      .substring(1, value.length - 1)
      .replaceAll("'", '')
      .split('],');

      return valuesTemp.map(v => v.substring(1, value.length - 1)
      .trim()
      .replace('[', '')
      .replace(']', '')
      .split(', '));
    }
  })
  rows: string[][] = [];

  @Input({required: true})
  link: string = '';

  @Input({
    alias: 'link-name',
    required: true})
  linkName: string = '';

  constructor() {}

  ngOnInit(): void {
  }
}
