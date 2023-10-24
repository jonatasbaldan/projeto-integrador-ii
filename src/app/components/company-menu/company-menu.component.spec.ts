import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMenuComponent } from './company-menu.component';

describe('CompanyMenuComponent', () => {
  let component: CompanyMenuComponent;
  let fixture: ComponentFixture<CompanyMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyMenuComponent]
    });
    fixture = TestBed.createComponent(CompanyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
