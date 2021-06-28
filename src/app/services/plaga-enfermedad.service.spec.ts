import { TestBed } from '@angular/core/testing';

import { PlagaEnfermedadService } from './plaga-enfermedad.service';

describe('PlagaEnfermedadService', () => {
  let service: PlagaEnfermedadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlagaEnfermedadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
