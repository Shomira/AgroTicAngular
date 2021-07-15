import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MonitoreoGeneralService } from 'src/app/services/monitoreo-general.service';
import { PlantaService } from 'src/app/services/planta.service';

@Component({
  selector: 'app-monitoreo-general',
  templateUrl: './monitoreo-general.component.html',
  styleUrls: ['./monitoreo-general.component.css']
})
export class MonitoreoGeneralComponent implements OnInit {

  crearMonitoreoGeneral: FormGroup;
  submitted = false;
  id: string | null;
  planta: any;

  constructor(private fb: FormBuilder, 
              private monitoreoGeneralService: MonitoreoGeneralService, 
              private plantaService: PlantaService,
              private router: Router,
              private aRoute: ActivatedRoute) {

    this.crearMonitoreoGeneral = this.fb.group({
      ubicacion: ['', Validators.required],
      lugarLote:  ['', Validators.required],
      fechaMonitoreo: ['', Validators.required],
      areaSembrada:  ['', Validators.required],
      germinacionPrendimiento: ['', Validators.required],
      // Datos de analisis del suelo
      moPorcent:  ['', Validators.required],
      phSuelo: ['', Validators.required],
      nitrogenoPorcent:  ['', Validators.required],
      fosforoMgHg: ['', Validators.required],
      potasioCmolKg:  ['', Validators.required],
      temperaturaCelsius:  ['', Validators.required],
      humedadRelativaPorcent: ['', Validators.required],
      riegoLluviaMlPlanta:  ['', Validators.required],
      otrosElementos: [''],
      observaciones:  ['']
    });

    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    if (this.id != null){
      this.plantaService.read(this.id).subscribe(data => {
          this.planta = data;
      });
    }
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
      moPorcent: this.crearMonitoreoGeneral.value.moPorcent,
      phSuelo: this.crearMonitoreoGeneral.value.phSuelo,
      nitrogenoPorcent: this.crearMonitoreoGeneral.value.nitrogenoPorcent,
      fosforoMgHg: this.crearMonitoreoGeneral.value.fosforoMgHg,
      potasioCmolKg: this.crearMonitoreoGeneral.value.potasioCmolKg,
      otrosElementos: this.crearMonitoreoGeneral.value.otrosElementos,
      temperaturaCelsius: this.crearMonitoreoGeneral.value.temperaturaCelsius,
      humedadRelativaPorcent: this.crearMonitoreoGeneral.value.humedadRelativaPorcent,
      riegoLluviaMlPlanta: this.crearMonitoreoGeneral.value.riegoLluviaMlPlanta,
      observaciones: this.crearMonitoreoGeneral.value.observaciones,
      planta: this.planta,
      // fecha del sistema
      //fechaCreacion: new Date(),
      //fechaActualizacion : new Date()

    }
    //Creacion de monitoreo General a traves de la API
    this.monitoreoGeneralService.create(monitoreoGeneral)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.router.navigate(['/monitoreos']);
        },
        error => {
          console.log(error);
        });
   
  }
}
