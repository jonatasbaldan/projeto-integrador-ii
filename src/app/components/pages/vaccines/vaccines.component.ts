import { Component, HostListener, OnInit } from '@angular/core';
import { Vacina } from 'src/app/models/Vacina';
import { VaccineService } from 'src/app/services/vaccine.service';

@Component({
  selector: 'app-vaccines',
  templateUrl: './vaccines.component.html',
  styleUrls: ['./vaccines.component.css', '../../section.css'],
})
export class VaccinesComponent implements OnInit {
  isDesktop = false;
  isMobile = false;
  vacinas: string = '';

  constructor(private vaccineService: VaccineService) {
    this.vacinas = this.arrayObjectsToStringWithBrackets(
      this.vaccineService.getVacinas()
    );
    console.log('asdf' + this.vacinas);
  }

  @HostListener('window:resize', ['$event'])
  ngOnInit(): void {
    this.isDesktop = window.innerWidth >= 768;
    this.isMobile = window.innerWidth < 768;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktop = window.innerWidth >= 768;
    this.isMobile = window.innerWidth < 768;
  }

  getAllVacinas(): string {
    console.log('hero');
    console.log(this.vacinas.toString());
    return this.vacinas.toString();
  }

  arrayObjectsToStringWithBrackets(arr: Vacina[]): string {
    console.log(
      'hero' + '[' + arr.map((obj) => Object.values(obj)).join(', ') + ']'
    );
    return '[' + arr.map((obj) => '[' + Object.values(obj) + ']') + ']';
  }
}
