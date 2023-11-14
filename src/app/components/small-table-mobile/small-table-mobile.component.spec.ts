import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallTableMobileComponent } from './small-table-mobile.component';

describe('SmallTableMobileComponent', () => {
  let component: SmallTableMobileComponent;
  let fixture: ComponentFixture<SmallTableMobileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallTableMobileComponent]
    });
    fixture = TestBed.createComponent(SmallTableMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
