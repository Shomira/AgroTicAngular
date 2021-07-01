import { TestBed } from '@angular/core/testing';

import { ItemsCatalogoService } from './items-catalogo.service';

describe('ItemsCatalogoService', () => {
  let service: ItemsCatalogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemsCatalogoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
