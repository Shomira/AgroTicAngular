import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoreoGeneralComponent } from './monitoreo-general.component';

describe('MonitoreoGeneralComponent', () => {
  let component: MonitoreoGeneralComponent;
  let fixture: ComponentFixture<MonitoreoGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitoreoGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoreoGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
