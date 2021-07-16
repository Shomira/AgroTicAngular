import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMonitoreoComponent } from './ver-monitoreo.component';

describe('VerMonitoreoComponent', () => {
  let component: VerMonitoreoComponent;
  let fixture: ComponentFixture<VerMonitoreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerMonitoreoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerMonitoreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
