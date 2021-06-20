import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMonitPlantaComponent } from './form-monit-planta.component';

describe('FormMonitPlantaComponent', () => {
  let component: FormMonitPlantaComponent;
  let fixture: ComponentFixture<FormMonitPlantaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMonitPlantaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMonitPlantaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
