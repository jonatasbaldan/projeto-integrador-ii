import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input({
    alias: 'label-name',
  })
  labelName: String = '';

  @Input()
  placeholder: String = '';

  @Input({
    alias: 'input-type',
  })
  inputType: String = '';

  @Input({
    alias: 'width',
  })
  width: String = '360px';

  @Output() valor = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onInputChange(event: any) {
    const valueEvent = event.target.value;
    this.valor.emit(valueEvent);
  }
}
