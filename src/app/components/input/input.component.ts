import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input({
    alias: 'label-name'
  }) labelName: String = '';

  @Input()
  placeholder: String = '';

  @Input({
    alias: 'input-type'
  }) inputType: String = '';

  @Input({
    alias: 'width'
  }) width: String = '360px';

  constructor() { }

  ngOnInit(): void {
  }

}
