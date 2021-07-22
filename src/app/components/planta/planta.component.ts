import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CultivoService } from 'src/app/services/cultivo.service';
import { PlantaService } from 'src/app/services/planta.service';
import { VariedadService } from 'src/app/services/variedad.service';

@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.css']
})
export class PlantaComponent implements OnInit {

  crearPlanta: FormGroup;
  submitted = false;
  plantas: any[] = [];
  cultivos: any[] = [];
  variedades: any[] = [];
  idEliminar: String = "";

  constructor(private fb: FormBuilder, 
              private plantaService: PlantaService,
              private cultivoService: CultivoService,
              private variedadService: VariedadService) {
    this.crearPlanta = this.fb.group({
      variedad:  ['', Validators.required],
      cultivo:  ['', Validators.required],
      fechaSiembra:  ['', Validators.required]

    })
  }

  ngOnInit(): void {
    this.readDatos();
  }

  agregarPlanta(){

    // validacion de los campos llenados
    this.submitted = true;
    if(this.crearPlanta.invalid){
      return;
    }

    for (let index = 0; index < this.cultivos.length; index++) {
      if (this.crearPlanta.value.cultivo == this.cultivos[index].id) {
        var cultivo = this.cultivos[index];
      }
    }
    for (let index = 0; index < this.variedades.length; index++){
      if(this.crearPlanta.value.variedad == this.variedades[index].id){
        var variedad = this.variedades[index];
      }
    }

    const planta: any= {
      variedad: variedad,
      cultivo: cultivo,
      fechaSiembra: this.crearPlanta.value.fechaSiembra,
      // fecha del sistema
      //fechaCreacion: new Date(),
      //fechaActualizacion : new Date()
    }
    //Creacion de catalogo a traves de la API
    this.plantaService.create(planta)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          location.reload();
        },
        error => {
          console.log(error);
        });
  }

  readDatos(): void {
    this.plantaService.readAll().subscribe(data => {
      this.plantas= data;
    },
    error => {
      console.log(error);
    });

    this.cultivoService.readAll().subscribe(data => {
      this.cultivos= data;
    },
    error => {
      console.log(error);
    });

    this.variedadService.readAll().subscribe(data => {
      this.variedades= data;
    },
    error => {
      console.log(error);
    });
  }

  getIdEliminar(id: String){
    this.idEliminar = id;
  }

  eliminarPlanta(){
    this.plantaService.delete(this.idEliminar)
      .subscribe(data => {
        console.log(data);
        location.reload();
      },
      error => {
        console.log(error);
      });
  }

}
