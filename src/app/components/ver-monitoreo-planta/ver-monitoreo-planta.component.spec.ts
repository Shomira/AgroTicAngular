import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerMonitoreoPlantaComponent } from './ver-monitoreo-planta.component';

describe('VerMonitoreoPlantaComponent', () => {
  let component: VerMonitoreoPlantaComponent;
  let fixture: ComponentFixture<VerMonitoreoPlantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerMonitoreoPlantaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerMonitoreoPlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
