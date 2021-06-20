import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlagaEnfermedadComponent } from './plaga-enfermedad.component';

describe('PlagaEnfermedadComponent', () => {
  let component: PlagaEnfermedadComponent;
  let fixture: ComponentFixture<PlagaEnfermedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlagaEnfermedadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlagaEnfermedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
