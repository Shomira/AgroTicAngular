import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlagaEnfermedadService } from 'src/app/services/plaga-enfermedad.service';

@Component({
  selector: 'app-plaga-enfermedad',
  templateUrl: './plaga-enfermedad.component.html',
  styleUrls: ['./plaga-enfermedad.component.css']
})
export class PlagaEnfermedadComponent implements OnInit {
  crearPlagaEnfermedad: FormGroup;
  submitted = false;
  plagasEnfermedades: any;
  constructor(private fb: FormBuilder, private plagaEnfermedad: PlagaEnfermedadService) {
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

    this.plagaEnfermedad.create(plagaEnfermedad)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });



  }
  readPlagasEnfermedades(): void {
    this.plagaEnfermedad.readAll()
      .subscribe(
        plagasEnfermedades => {
          this.plagasEnfermedades = this.plagasEnfermedades;
          console.log(plagasEnfermedades);
        },
        error => {
          console.log(error);
        });
  }

}
