import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MonitoreoGeneralService } from 'src/app/services/monitoreo-general.service';

@Component({
  selector: 'app-monitoreo-general',
  templateUrl: './monitoreo-general.component.html',
  styleUrls: ['./monitoreo-general.component.css']
})
export class MonitoreoGeneralComponent implements OnInit {

  crearMonitoreoGeneral: FormGroup;
  submitted = false;
  monitoreosGenerales: any [] = [];

  constructor(private fb: FormBuilder, private monitoreoGeneralService: MonitoreoGeneralService) {
    this.crearMonitoreoGeneral = this.fb.group({
      ubicacion: ['', Validators.required],
      lugarLote:  ['', Validators.required],
      fechaMonitoreo: ['', Validators.required],
      areaSembrada:  ['', Validators.required],
      germinacionPrendimiento: ['', Validators.required],
      // Datos de analisis del suelo
      porcentajeMo:  ['', Validators.required],
      phSuelo: ['', Validators.required],
      porcentNitrogeno:  ['', Validators.required],
      fosforo: ['', Validators.required],
      potasio:  ['', Validators.required],
      otrosElementos: ['', Validators.required],
      temperatura:  ['', Validators.required],
      humedadRelativa: ['', Validators.required],
      riegoLluvia:  ['', Validators.required],
      observaciones: ['', Validators.required],
      usuario:  ['', Validators.required]
    })
  }

  ngOnInit(): void {
    
  }

  agregarMonitoreoGneral(){

    // validacion de los campos llenados
    this.submitted = true;
    if(this.crearMonitoreoGeneral.invalid){
      return;
    }
    const monitoreoGeneral: any= {
      ubicacion: this.crearMonitoreoGeneral.value.ubicacion,
      lugarLote: this.crearMonitoreoGeneral.value.lugarLote,
      fechaMonitoreo: this.crearMonitoreoGeneral.value.fechaMonitoreo,
      areaSembrada: this.crearMonitoreoGeneral.value.areaSembrada,
      germinacionPrendimiento: this.crearMonitoreoGeneral.value.germinacionPrendimiento,
      porcentajeMo: this.crearMonitoreoGeneral.value.porcentajeMo,
      phSuelo: this.crearMonitoreoGeneral.value.phSuelo,
      porcentNitrogeno: this.crearMonitoreoGeneral.value.porcentNitrogeno,
      fosforo: this.crearMonitoreoGeneral.value.fosforo,
      potasio: this.crearMonitoreoGeneral.value.potasio,
      otrosElementos: this.crearMonitoreoGeneral.value.otrosElementos,
      temperatura: this.crearMonitoreoGeneral.value.temperatura,
      humedadRelativa: this.crearMonitoreoGeneral.value.humedadRelativa,
      riegoLluvia: this.crearMonitoreoGeneral.value.riegoLluvia,
      observaciones: this.crearMonitoreoGeneral.value.observaciones,
      usuario: this.crearMonitoreoGeneral.value.usuario,
      // fecha del sistema
      fechaCreacion: new Date(),
      fechaActualizacion : new Date()

    }
    console.log(monitoreoGeneral);
    /* Creacion de monitoreo General a traves de la API
    this.monitoreoGenralService.create(monitoreoGeneral)
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


}
