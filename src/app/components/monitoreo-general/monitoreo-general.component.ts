import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-monitoreo-general',
  templateUrl: './monitoreo-general.component.html',
  styleUrls: ['./monitoreo-general.component.css']
})
export class MonitoreoGeneralComponent implements OnInit {
  crearMonitoreoGeneral: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.crearMonitoreoGeneral = this.fb.group({
      fechaMonitoreo: ['', Validators.required],
      areaSembrada:  ['', Validators.required],
      germinacionPrendimiento:  ['', Validators.required],
      // Datos de analisis del suelo
      porcentMo:  ['', Validators.required],
      phSuelo:  ['', Validators.required],
      nitrogeno:  ['', Validators.required],
      fosforo:  ['', Validators.required],
      potasio:  ['', Validators.required],
      otrosElementos:  ['', Validators.required],
      //
      temperaturaC:  ['', Validators.required],
      humedadRelativa:  ['', Validators.required],
      riegoLluvia:  ['', Validators.required],
      observaciones:  ['', Validators.required],
      usuario:  ['', Validators.required]

    })
  }
  ngOnInit(): void {
  }



  agregarMonitoreoGeneral(){

    // validacion de los campos llenados
    this.submitted = true;
    if(this.crearMonitoreoGeneral.invalid){
      return;
    }
    const MonitoreoPlanta: any= {
      fechaMonitoreo: this.crearMonitoreoGeneral.value.fechaMonitoreo,
      areaSembrada: this.crearMonitoreoGeneral.value.areaSembrada,
      germinacionPrendimiento: this.crearMonitoreoGeneral.value.germinacionPrendimiento,

      porcentMo: this.crearMonitoreoGeneral.value.porcentMo,
      phSuelo: this.crearMonitoreoGeneral.value.phSuelo,
      fosforo: this.crearMonitoreoGeneral.value.fosforo,
      nitrogeno: this.crearMonitoreoGeneral.value.nitrogeno,
      potasio: this.crearMonitoreoGeneral.value.potasio,
      otrosElementos: this.crearMonitoreoGeneral.value.otrosElementos,

      
      temperaturaC: this.crearMonitoreoGeneral.value.temperaturaC,
      humedadRelativa: this.crearMonitoreoGeneral.value.humedadRelativa,
      riegoLluvia: this.crearMonitoreoGeneral.value.riegoLluvia,
      observaciones: this.crearMonitoreoGeneral.value.observaciones,
      usuario: this.crearMonitoreoGeneral.value.usuario,

      // fecha del sistema
      fechaCreacion: new Date(),
      fechaActualizacion : new Date()


    }
    console.log(MonitoreoPlanta);

  }
}
