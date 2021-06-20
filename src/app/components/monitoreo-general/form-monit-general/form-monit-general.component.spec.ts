import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMonitGeneralComponent } from './form-monit-general.component';

describe('FormMonitGeneralComponent', () => {
  let component: FormMonitGeneralComponent;
  let fixture: ComponentFixture<FormMonitGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMonitGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMonitGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
