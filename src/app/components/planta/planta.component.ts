import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlantaService } from 'src/app/services/planta.service';

@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.css']
})
export class PlantaComponent implements OnInit {

  crearPlanta: FormGroup;
  submitted = false;
  plantas: any;

  constructor(private fb: FormBuilder, private plantaService: PlantaService) {
    this.crearPlanta = this.fb.group({
      nombre: ['', Validators.required],
      variedad:  ['', Validators.required],
      cultivo:  ['', Validators.required],
      fechaSiembra:  ['', Validators.required]

    })
  }

  ngOnInit(): void {
  }

  agregarPlanta(){

    // validacion de los campos llenados
    this.submitted = true;
    if(this.crearPlanta.invalid){
      return;
    }
    const Planta: any= {
      nombre: this.crearPlanta.value.nombre,
      variedad: this.crearPlanta.value.variedad,
      cultivo: this.crearPlanta.value.cultivo,
      fechaSiembra: this.crearPlanta.value.fechaSiembra,
      // fecha del sistema
      fechaCreacion: new Date(),
      fechaActualizacion : new Date()


    }
    console.log(Planta);
     /* Creacion de catalogo a traves de la API
    this.plantaService.create(planta)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });

*/
  }
  readPlantas(): void {
    this.plantaService.readAll()
      .subscribe(
        plantas => {
          this.plantas = plantas;
          console.log(plantas);
        },
        error => {
          console.log(error);
        });
  }
}
