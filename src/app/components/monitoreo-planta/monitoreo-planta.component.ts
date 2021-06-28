import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-monitoreo-planta',
  templateUrl: './monitoreo-planta.component.html',
  styleUrls: ['./monitoreo-planta.component.css']
})
export class MonitoreoPlantaComponent implements OnInit {
  crearMonitoreoPlanta: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.crearMonitoreoPlanta = this.fb.group({
      ubicacion: ['', Validators.required],
      lugarLote:  ['', Validators.required],

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
      cantidadCP:  ['', Validators.required],
      fecha:  ['', Validators.required],

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
    const MonitoreoPlanta: any= {
      ubicacion: this.crearMonitoreoPlanta.value.ubicacion,
      lugarLote: this.crearMonitoreoPlanta.value.lugarLote,
      // Datos fenologicos del cultivo
      altura: this.crearMonitoreoPlanta.value.altura,
      diametro: this.crearMonitoreoPlanta.value.diametro,
      numRacimosPlanta: this.crearMonitoreoPlanta.value.numRacimosPlanta,
      numFloresPlanta: this.crearMonitoreoPlanta.value.numFloresPlanta,
      numFrutosPlanta: this.crearMonitoreoPlanta.value.numFrutosPlanta,
      numFrutosRacimo: this.crearMonitoreoPlanta.value.numFrutosRacimo,
       
      numFloresRacimo: this.crearMonitoreoPlanta.value.numFloresRacimo,      
      longitudFruto: this.crearMonitoreoPlanta.value.longitudFruto,
      diametroFruto: this.crearMonitoreoPlanta.value.diametroFruto,    
      pesoFruto: this.crearMonitoreoPlanta.value.pesoFruto,
      produccionPlanta: this.crearMonitoreoPlanta.value.produccionPlanta,

      

      //Aplicacion Fertitlizante

      cantidadF: this.crearMonitoreoPlanta.value.cantidadF,
      fechaF: this.crearMonitoreoPlanta.value.fechaF,
      // producto control plaga Enfermedad
      controlPlagaEnfermedad: this.crearMonitoreoPlanta.value.controlPlagaEnfermedad,
      cantidadCP: this.crearMonitoreoPlanta.value.cantidadCP,
      fecha: this.crearMonitoreoPlanta.value.fecha,
   
      //Relacion Externa 
      planta: this.crearMonitoreoPlanta.value.planta,
      monitoreoGeneral: this.crearMonitoreoPlanta.value.monitoreoGeneral,
      fertilizante: this.crearMonitoreoPlanta.value.fertilizante,
      // Fecha del sistema
      fechaCreacion: new Date(),
      fechaActualizacion : new Date()


    }
    console.log(MonitoreoPlanta);

  }
}