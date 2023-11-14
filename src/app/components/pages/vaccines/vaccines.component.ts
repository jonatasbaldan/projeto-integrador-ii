import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-vaccines',
  templateUrl: './vaccines.component.html',
  styleUrls: ['./vaccines.component.css', '../../section.css'],
})
export class VaccinesComponent {
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
