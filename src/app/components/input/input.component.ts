import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() labelName: String = '';
  @Input() placeholder: String = '';
  @Input() inputType: String = '';

  constructor() { }

  ngOnInit(): void {
  }

}
