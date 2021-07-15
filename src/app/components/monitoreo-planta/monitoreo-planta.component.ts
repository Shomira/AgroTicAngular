import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MonitoreoPlantaService } from 'src/app/services/monitoreo-planta.service';

@Component({
  selector: 'app-monitoreo-planta',
  templateUrl: './monitoreo-planta.component.html',
  styleUrls: ['./monitoreo-planta.component.css']
})
export class MonitoreoPlantaComponent implements OnInit {
  crearMonitoreoPlanta: FormGroup;
  submitted = false;
  monitoreosPlantas: any;
  fertilizantes: any;
  controles_plagas_enfermedades: any;

  constructor(private fb: FormBuilder, private monitoreoPlantaService: MonitoreoPlantaService) {
    this.crearMonitoreoPlanta = this.fb.group({

      // Datos fenologicos del cultivo
      altura:  ['', Validators.required],
      diametro:  ['', Validators.required],
      numRacimosPlanta:  ['', Validators.required],
      numFloresPlanta:  ['', Validators.required],
      numFrutosPlanta:  ['', Validators.required],
      numFloresRacimo:  ['', Validators.required],
      numFrutosRacimo:  ['', Validators.required],
      longitudFruto:  ['', Validators.required],
      pesoFruto:  ['', Validators.required],
      diametroFruto: ['', Validators.required],

      produccionPlanta: ['', Validators.required],
      
      //Aplicacion Fertitlizante
      cantidadF:  ['', Validators.required],
      fechaF:  ['', Validators.required],

      // producto control plaga Enfermedad
      controlPlagaEnfermedad:  ['', Validators.required],
      cantidadProducto:  ['', Validators.required],
      fechaAplicacion:  ['', Validators.required],

      //Relacion Externa 
      planta:  ['', Validators.required],
      monitoreoGeneral:  ['', Validators.required],
      fertilizante:['', Validators.required],


    })
  }
  ngOnInit(): void {
    
  }



  agregarMonitoreoPlanta(){

    // validacion de los campos llenados
    this.submitted = true;
    if(this.crearMonitoreoPlanta.invalid){
      return;
    }
    const monitoreoPlanta: any= {
      // Datos fenologicos del cultivo
      alturaCm: this.crearMonitoreoPlanta.value.altura,
      diametroCm: this.crearMonitoreoPlanta.value.diametro,
      nroRacimos: this.crearMonitoreoPlanta.value.numRacimosPlanta,
      nroFloresTotalesPlanta: this.crearMonitoreoPlanta.value.numFloresPlanta,
      nroFrutosTotalesPlanta: this.crearMonitoreoPlanta.value.numFrutosPlanta,
      nroFrutosRacimo: this.crearMonitoreoPlanta.value.numFrutosRacimo,
       
      nroFloresRacimo: this.crearMonitoreoPlanta.value.numFloresRacimo,      
      longitudFrutoCm: this.crearMonitoreoPlanta.value.longitudFruto,
      diametroFrutoCm: this.crearMonitoreoPlanta.value.diametroFruto,    
      pesoFrutoG: this.crearMonitoreoPlanta.value.pesoFruto,
      produccionPlantaKg: this.crearMonitoreoPlanta.value.produccionPlanta,
      //Aplicacion Fertitlizante

      cantFertilizanteGplanta: this.crearMonitoreoPlanta.value.cantidadF,
      fechaFertilizante: this.crearMonitoreoPlanta.value.fechaF,
      // producto control plaga Enfermedad
      controlPlagaEnfermedad: this.crearMonitoreoPlanta.value.controlPlagaEnfermedad,
      cantProductoPlEn: this.crearMonitoreoPlanta.value.cantidadCP,
      fechaProductoPlEn: this.crearMonitoreoPlanta.value.fechaAplicacion,
   
      //Relacion Externa 
      monitoreoGeneral: this.crearMonitoreoPlanta.value.monitoreoGeneral,
      fertilizante: this.crearMonitoreoPlanta.value.fertilizante,
      // Fecha del sistema
      //fechaCreacion: new Date(),
      //fechaActualizacion : new Date()

    }
    console.log(monitoreoPlanta);

    //Creacion de Monitoreo Planta a traves de la API
    this.monitoreoPlantaService.create(monitoreoPlanta)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }
  // Esta funcion no va aquí
  readMonitoreoPlantas(): void {
    this.monitoreoPlantaService.readAll()
      .subscribe(
          monitoreosPlantas => {
          this.monitoreosPlantas = monitoreosPlantas;
          console.log(monitoreosPlantas);
        },
        error => {
          console.log(error);
        });
  }

  readDatos(): void {
    this.monitoreoPlantaService.readAll()
      .subscribe(
          monitoreosPlantas => {
          this.monitoreosPlantas = monitoreosPlantas;
          console.log(monitoreosPlantas);
        },
        error => {
          console.log(error);
        });
  }

}