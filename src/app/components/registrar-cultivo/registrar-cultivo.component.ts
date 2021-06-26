import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registrar-cultivo',
  templateUrl: './registrar-cultivo.component.html',
  styleUrls: ['./registrar-cultivo.component.css']
})
export class RegistrarCultivoComponent implements OnInit {
  crearCultivo: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) {
    this.crearCultivo = this.fb.group({
      nombreComun: ['', Validators.required],
      clima:  ['', Validators.required],
      cicloVida:  ['', Validators.required],
      zonaProduccion:  ['', Validators.required]

    })

  }

  ngOnInit(): void {
  }

  agregarCultivo(){
    console.log(this.crearCultivo);

  }
}
