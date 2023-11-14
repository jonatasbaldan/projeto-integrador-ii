import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.css', '../../section.css'],
})
export class SchedulesComponent {
  isDesktop = false;
  isMobile = false;

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
}
