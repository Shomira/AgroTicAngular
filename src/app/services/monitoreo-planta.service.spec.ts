import { TestBed } from '@angular/core/testing';

import { MonitoreoPlantaService } from './monitoreo-planta.service';

describe('MonitoreoPlantaService', () => {
  let service: MonitoreoPlantaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonitoreoPlantaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
