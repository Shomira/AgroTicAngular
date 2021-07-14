import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerCultivoComponent } from './ver-cultivo.component';

describe('VerCultivoComponent', () => {
  let component: VerCultivoComponent;
  let fixture: ComponentFixture<VerCultivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerCultivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCultivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
