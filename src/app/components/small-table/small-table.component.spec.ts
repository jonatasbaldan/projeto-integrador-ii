import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallTableComponent } from './small-table.component';

describe('SmallTableComponent', () => {
  let component: SmallTableComponent;
  let fixture: ComponentFixture<SmallTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallTableComponent]
    });
    fixture = TestBed.createComponent(SmallTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
