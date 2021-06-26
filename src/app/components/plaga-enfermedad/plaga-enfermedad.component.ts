import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-plaga-enfermedad',
  templateUrl: './plaga-enfermedad.component.html',
  styleUrls: ['./plaga-enfermedad.component.css']
})
export class PlagaEnfermedadComponent implements OnInit {
  crearPlagaEnfermedad: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder) {
    this.crearPlagaEnfermedad = this.fb.group({
      nombreComun: ['', Validators.required],
      nombreCientifico:  ['', Validators.required],
     

    })

  }

  ngOnInit(): void {
  }

  agregarPlagaEnfermedad(){

    // validacion de los campos llenados
    this.submitted = true;
    if(this.crearPlagaEnfermedad.invalid){
      return;
    }
    const plagaEnfermedad: any= {
      nombre: this.crearPlagaEnfermedad.value.nombre,
      nombreCientifico: this.crearPlagaEnfermedad.value.nombreCientifico,
      // fecha del sistema
      fechaCreacion: new Date(),
      fechaActualizacion : new Date()


    }
   // console.log(this.crearPlagaEnfermedad);
   console.log(plagaEnfermedad);

  }

}
