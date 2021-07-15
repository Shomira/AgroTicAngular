import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsCatalogoService } from 'src/app/services/items-catalogo.service';
import { MonitoreoGeneralService } from 'src/app/services/monitoreo-general.service';
import { MonitoreoPlantaService } from 'src/app/services/monitoreo-planta.service';

@Component({
  selector: 'app-monitoreo-planta',
  templateUrl: './monitoreo-planta.component.html',
  styleUrls: ['./monitoreo-planta.component.css']
})
export class MonitoreoPlantaComponent implements OnInit {
  crearMonitoreoPlanta: FormGroup;
  submitted = false;
  id: string | null;
  fertilizantes: any[] = [];
  controles_plagas_enfermedades: any[] = [];
  monitoreoGeneral: any;

  constructor(private fb: FormBuilder, 
              private monitoreoPlantaService: MonitoreoPlantaService,
              private itemsCatalogoService: ItemsCatalogoService,
              private monitoreoGeneralService: MonitoreoGeneralService,
              private router: Router,
              private aRoute: ActivatedRoute) {
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
      diametroFruto: ['', Validators.required],
      pesoFruto:  ['', Validators.required],
      produccionPlanta: ['', Validators.required],
      
      //Aplicacion Fertitlizante
      fertilizante:['', Validators.required],
      cantidadF:  ['', Validators.required],
      fechaF:  ['', Validators.required],

      // producto control plaga Enfermedad
      controlPlagaEnfermedad:  ['', Validators.required],
      cantidadProducto:  ['', Validators.required],
      fechaAplicacion:  ['', Validators.required]

    });

    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.verItemsCatalogo();
    if (this.id != null){
      this.monitoreoGeneralService.read(this.id).subscribe(data => {
          this.monitoreoGeneral = data;
      });
    }
  }

  agregarMonitoreoPlanta(){

    // validacion de los campos llenados
    this.submitted = true;
    
    if(this.crearMonitoreoPlanta.invalid){
      return;
    }

    for (let index = 0; index < this.fertilizantes.length; index++) {
      if (this.crearMonitoreoPlanta.value.fertilizante == this.fertilizantes[index].id) {
        var fertilizante_aux = this.fertilizantes[index];
      }
    }
    for (let index = 0; index < this.controles_plagas_enfermedades.length; index++){
      if(this.crearMonitoreoPlanta.value.controlPlagaEnfermedad == this.controles_plagas_enfermedades[index].id){
        var controlPlagaEnfermedad_aux = this.controles_plagas_enfermedades[index];
      }
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
      fertilizante: fertilizante_aux,
      cantFertilizanteGplanta: this.crearMonitoreoPlanta.value.cantidadF,
      fechaFertilizante: this.crearMonitoreoPlanta.value.fechaF,
      // producto control plaga Enfermedad
      controlPlagaEnfermedad: controlPlagaEnfermedad_aux,
      cantProductoPlEn: this.crearMonitoreoPlanta.value.cantidadProducto,
      fechaProductoPlEn: this.crearMonitoreoPlanta.value.fechaAplicacion,
   
      //Relacion Externa 
      monitoreoGeneral: this.monitoreoGeneral,
      // Fecha del sistema
      //fechaCreacion: new Date(),
      //fechaActualizacion : new Date()

    };
    
    //Creacion de monitoreo Planta a traves de la API
    this.monitoreoPlantaService.create(monitoreoPlanta)
      .subscribe(
        response => {
          this.submitted = true;
          this.router.navigate(['/monitoreos']);
        },
        error => {
          console.log(error);
        });
        
  }

  // funcion para cargar los datos de los catálogos
  verItemsCatalogo(): void {
    this.itemsCatalogoService.readAll().subscribe(data => {
      for (let index = 0; index < data.length; index++) {
        if (3 == data[index].catalogo.id) {
          this.fertilizantes.push(data[index]);
        }else{
          if(4 == data[index].catalogo.id){
            this.controles_plagas_enfermedades.push(data[index]);
          }
        }
      }
    },
    error => {
      console.log(error);
    });
  }

}