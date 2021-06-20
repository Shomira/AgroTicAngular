import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsCatalogoComponent } from './items-catalogo.component';

describe('ItemsCatalogoComponent', () => {
  let component: ItemsCatalogoComponent;
  let fixture: ComponentFixture<ItemsCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsCatalogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
