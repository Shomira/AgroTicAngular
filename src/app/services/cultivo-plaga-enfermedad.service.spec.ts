import { TestBed } from '@angular/core/testing';

import { CultivoPlagaEnfermedadService } from './cultivo-plaga-enfermedad.service';

describe('CultivoPlagaEnfermedadService', () => {
  let service: CultivoPlagaEnfermedadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CultivoPlagaEnfermedadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
