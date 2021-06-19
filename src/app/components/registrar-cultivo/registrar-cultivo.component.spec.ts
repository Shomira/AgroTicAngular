import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarCultivoComponent } from './registrar-cultivo.component';

describe('RegistrarCultivoComponent', () => {
  let component: RegistrarCultivoComponent;
  let fixture: ComponentFixture<RegistrarCultivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarCultivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarCultivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
