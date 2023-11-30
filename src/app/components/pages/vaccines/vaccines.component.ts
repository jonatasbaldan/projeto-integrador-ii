import { Component, HostListener, OnInit } from '@angular/core';
import { Vacina } from 'src/app/models/Vacina';
import { VaccineService } from 'src/app/services/vaccine.service';

@Component({
  selector: 'app-vaccines',
  templateUrl: './vaccines.component.html',
  styleUrls: ['./vaccines.component.css', '../../../css/section.css'],
})
export class VaccinesComponent implements OnInit {
  isDesktop = false;
  isMobile = false;
  vacinas: Vacina[] = [];

  constructor(private vaccineService: VaccineService) {}

  @HostListener('window:resize', ['$event'])
  ngOnInit(): void {
    this.isDesktop = window.innerWidth >= 768;
    this.isMobile = window.innerWidth < 768;

    this.vaccineService.getVacinasRequest().subscribe({
      next: (res) => {
        const responseString: string = JSON.stringify(res);
        const responseJson: any = JSON.parse(responseString);
        responseJson.content.forEach((element: Vacina) => {
          console.log(element);
          this.vacinas.push(element);
        });
      },

      error: (err) => {
        console.log(err);
      },

      complete: () => {
        console.log('complete');
      },
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktop = window.innerWidth >= 768;
    this.isMobile = window.innerWidth < 768;
  }

  getAllVacinas(): Vacina[] {
    return this.vacinas;
  }
}
