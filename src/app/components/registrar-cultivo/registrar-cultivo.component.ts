import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CultivoService } from 'src/app/services/cultivo.service';

@Component({
  selector: 'app-registrar-cultivo',
  templateUrl: './registrar-cultivo.component.html',
  styleUrls: ['./registrar-cultivo.component.css']
})
export class RegistrarCultivoComponent implements OnInit {

  crearCultivo: FormGroup;
  submitted = false;
  registrarCultivos: any;

  constructor(private fb: FormBuilder, private cultivoService: CultivoService) {
    this.crearCultivo = this.fb.group({
      nombre: ['', Validators.required],
      origen:  ['', Validators.required],
      cicloVida:  ['', Validators.required],
      clima:  ['', Validators.required],
      zonaProduccion:  ['', Validators.required],
      laboresCultivo:  [''],
      abonamiento:  ['', Validators.required],
      fertilizacion:  ['', Validators.required],
      buenaAsociacion:  ['', Validators.required],
      malaAsociacion:  ['', Validators.required],
      controlMalasHierbas:  ['', Validators.required],
      usoAplicacion:  ['', Validators.required],
      riego:  ['', Validators.required],

      nombreComun:  ['', Validators.required],
      familia:  ['', Validators.required],
      genero:  ['', Validators.required],
      especie:  ['', Validators.required],
      nombreCientifico:  ['', Validators.required],

      raiz:  ['', Validators.required],
      hojas:  ['', Validators.required],
      tallo:  ['', Validators.required],
      inflorescencia:  ['', Validators.required],
      semilla:  ['', Validators.required],

      altura:  ['', Validators.required],
      diametro:  ['', Validators.required],

      TempOptimaMaxima:  ['', Validators.required],
      TempOptimaMinima:  ['', Validators.required],
      TempGerminacionCrecimiento:  ['', Validators.required],
      TempGerminacionMaxima:  ['', Validators.required],
      TempGerminacionMinima:  ['', Validators.required],
      observacionesTemp:  ['', Validators.required],

      humedadMaxima:  ['', Validators.required],
      humedadMinima:  ['', Validators.required],
      observacionesHumedad:  ['', Validators.required],

      densidadSiembraMax:  ['', Validators.required],
      densidadSiembraMin:  ['', Validators.required],
      distanciaSurcos:  ['', Validators.required],
      distanciaPlantas:  ['', Validators.required],
      procesoPantacion:  ['', Validators.required],

      procesoTerreno:  ['', Validators.required],
      profundidad:  ['', Validators.required],
      observacionesTerreno:  ['', Validators.required],

      carbohidratos:  ['', Validators.required],
      proteinas:  ['', Validators.required],
      grasas:  ['', Validators.required],
      calorias:  ['', Validators.required],
      observacionesNutricional:  ['', Validators.required],

      maximaProduccion:  ['', Validators.required],
      minimaProduccion:  ['', Validators.required],

      maximaAlmacenamiento:  ['', Validators.required],
      minimaAlmacenamiento:  ['', Validators.required],
      observacionesAlmacenamiento:  ['', Validators.required],

      desde:  ['', Validators.required],
      hasta:  ['', Validators.required],
      observacionesRecoleccion:  ['', Validators.required],

      epocaPrincipal:  ['', Validators.required],
      observacionesEpocaSiembra:  ['', Validators.required],

      maximoPh:  ['', Validators.required],
      minimoPh:  ['', Validators.required],
      observacionesSuelo:  ['', Validators.required],

      material:  ['', Validators.required],
      diasTransplante:  ['', Validators.required],
      maximoSemillas:  ['', Validators.required],
      minimoSemillas:  ['', Validators.required],
      recomendacionesSemillero:  ['', Validators.required],
      observacionesSemillero:  ['', Validators.required]

    })

  }

  ngOnInit(): void {
    this.readRegistrarCultivos();
  }

  agregarCultivo(){

    this.submitted = true;
    
    if(this.crearCultivo.invalid){
      return;
    }
    const cultivo: any= {
      nombre: this.crearCultivo.value.nombre,
      origen: this.crearCultivo.value.origen,
      cicloVida: this.crearCultivo.value.cicloVida,
      clima: this.crearCultivo.value.clima,
      zonaProduccion: this.crearCultivo.value.zonaProduccion,
      laboresCultivo: this.crearCultivo.value.laboresCultivo,
      abonamiento: this.crearCultivo.value.abonamiento,
      fertilizacion: this.crearCultivo.value.fertilizacion,
      buenaAsociacion: this.crearCultivo.value.buenaAsociacion,
      malaAsociacion: this.crearCultivo.value.malaAsociacion,
      controlMalasHierbas: this.crearCultivo.value.controlMalasHierbas,
      usoAplicacion: this.crearCultivo.value.usoAplicacion,
      riego: this.crearCultivo.value.riego,

      nombreComun: this.crearCultivo.value.nombreComun,
      familia: this.crearCultivo.value.familia,
      genero: this.crearCultivo.value.genero,
      especie: this.crearCultivo.value.especie,
      nombreCientifico: this.crearCultivo.value.nombreCientifico,

      raiz: this.crearCultivo.value.raiz,
      hojas: this.crearCultivo.value.hojas,
      tallo: this.crearCultivo.value.tallo,
      inflorescencia: this.crearCultivo.value.inflorescencia,
      semilla: this.crearCultivo.value.semilla,

      altura: this.crearCultivo.value.altura,
      diametro: this.crearCultivo.value.diametro,

      TempOptimaMaxima: this.crearCultivo.value.TempOptimaMaxima,
      TempOptimaMinima: this.crearCultivo.value.TempOptimaMinima,
      TempGerminacionCrecimiento: this.crearCultivo.value.TempGerminacionCrecimiento,
      TempGerminacionMaxima: this.crearCultivo.value.TempGerminacionMaxima,
      TempGerminacionMinima: this.crearCultivo.value.TempGerminacionMinima,
      observacionesTemp: this.crearCultivo.value.observacionesTemp,

      humedadMaxima: this.crearCultivo.value.humedadMaxima,
      humedadMinima: this.crearCultivo.value.humedadMinima,
      observacionesHumedad: this.crearCultivo.value.observacionesHumedad,

      densidadSiembraMax: this.crearCultivo.value.densidadSiembraMax,
      densidadSiembraMin: this.crearCultivo.value.densidadSiembraMin,
      distanciaSurcos: this.crearCultivo.value.distanciaSurcos,
      distanciaPlantas: this.crearCultivo.value.distanciaPlantas,
      procesoPantacion: this.crearCultivo.value.procesoPantacion,

      procesoTerreno: this.crearCultivo.value.procesoTerreno,
      profundidad: this.crearCultivo.value.profundidad,
      observacionesTerreno: this.crearCultivo.value.observacionesTerreno,

      carbohidratos: this.crearCultivo.value.carbohidratos,
      proteinas: this.crearCultivo.value.proteinas,
      grasas: this.crearCultivo.value.grasas,
      calorias: this.crearCultivo.value.calorias,
      observacionesNutricional: this.crearCultivo.value.observacionesNutricional,

      maximaProduccion: this.crearCultivo.value.maximaProduccion,
      minimaProduccion: this.crearCultivo.value.minimaProduccion,

      maximaAlmacenamiento: this.crearCultivo.value.maximaAlmacenamiento,
      minimaAlmacenamiento: this.crearCultivo.value.minimaAlmacenamiento,
      observacionesAlmacenamiento: this.crearCultivo.value.observacionesAlmacenamiento,

      desde: this.crearCultivo.value.desde,
      hasta: this.crearCultivo.value.hasta,
      observacionesRecoleccion: this.crearCultivo.value.observacionesRecoleccion,
      epocaPrincipal: this.crearCultivo.value.epocaPrincipal,
      observacionesEpocaSiembra: this.crearCultivo.value.observacionesEpocaSiembra,
      maximoPh: this.crearCultivo.value.maximoPh,
      minimoPh: this.crearCultivo.value.minimoPh,
      observacionesSuelo: this.crearCultivo.value.observacionesSuelo,
      material: this.crearCultivo.value.material,
      diasTransplante: this.crearCultivo.value.diasTransplante,
      maximoSemillas: this.crearCultivo.value.maximoSemillas,
      minimoSemillas: this.crearCultivo.value.minimoSemillas,
      recomendacionesSemillero: this.crearCultivo.value.recomendacionesSemillero,
      observacionesSemillero: this.crearCultivo.value.observacionesSemillero,
      // fecha del sistema
      fechaCreacion: new Date(),
      fechaActualizacion : new Date()

    }
    console.log(cultivo);
    /* Creacion de Cultivo a traves de la API
    this.cultivoService.create(cultivo)
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
  readRegistrarCultivos(): void {
    this.cultivoService.readAll()
      .subscribe(
          registrarCultivos => {
          this.registrarCultivos = registrarCultivos;
          console.log(registrarCultivos);
        },
        error => {
          console.log(error);
        });
  }
  
}
