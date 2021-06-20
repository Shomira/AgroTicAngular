import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoreoPlantaComponent } from './monitoreo-planta.component';

describe('MonitoreoPlantaComponent', () => {
  let component: MonitoreoPlantaComponent;
  let fixture: ComponentFixture<MonitoreoPlantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitoreoPlantaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoreoPlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
