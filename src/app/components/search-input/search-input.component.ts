import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {
  @Input({
    required: true
  })
  placeholder: string = '';

  @Input({
    required: true
  })
  link: string = '';

}
