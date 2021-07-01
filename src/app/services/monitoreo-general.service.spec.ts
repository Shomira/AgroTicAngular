import { TestBed } from '@angular/core/testing';

import { MonitoreoGeneralService } from './monitoreo-general.service';

describe('MonitoreoGeneralService', () => {
  let service: MonitoreoGeneralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonitoreoGeneralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
