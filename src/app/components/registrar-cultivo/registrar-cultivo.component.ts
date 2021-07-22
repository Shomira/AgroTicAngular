import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CultivoService } from 'src/app/services/cultivo.service';
import { ItemsCatalogoService } from 'src/app/services/items-catalogo.service';

@Component({
  selector: 'app-registrar-cultivo',
  templateUrl: './registrar-cultivo.component.html',
  styleUrls: ['./registrar-cultivo.component.css']
})
export class RegistrarCultivoComponent implements OnInit {

  crearCultivo: FormGroup;
  submitted = false;
  familias: any [] = [];
  generos: any [] = [];
  taxonomia: any;
  morfologia: any;
  tamanio: any;
  temperatura: any;
  humedad: any;
  plantacion: any;
  preparacionTerreno: any;
  valorNutricional: any;
  produccionPromedio: any;
  almacenamiento: any;
  recoleccion: any;
  epocaSiembra: any;
  suelo: any;
  semillero: any;

  constructor(private fb: FormBuilder, 
              private cultivoService: CultivoService,
              private itemCatalogoService: ItemsCatalogoService) {
    this.crearCultivo = this.fb.group({
      nombre: ['', Validators.required],
      origen:  ['' ],
      cicloVida:  ['' ],
      clima:  ['' ],
      zonaProduccion:  ['' ],
      laboresCultivo:  [''],
      abonamiento:  ['' ],
      fertilizacion:  ['' ],
      buenaAsociacion:  ['' ],
      malaAsociacion:  ['' ],
      controlMalasHierbas:  ['' ],
      usoAplicacion:  ['' ],
      riego:  ['' ],

      nombreComun:  ['' ],
      familia:  ['' ],
      genero:  ['' ],
      especie:  ['' ],
      nombreCientifico:  ['' ],

      raiz:  ['' ],
      hojas:  ['' ],
      tallo:  ['' ],
      inflorescencia:  ['' ],
      semilla:  ['' ],

      altura:  ['' ],
      diametro:  ['' ],

      TempOptimaMaxima:  ['' ],
      TempOptimaMinima:  ['' ],
      TempGerminacionCrecimiento:  ['' ],
      TempGerminacionMaxima:  ['' ],
      TempGerminacionMinima:  ['' ],
      observacionesTemp:  ['' ],

      humedadMaxima:  ['' ],
      humedadMinima:  ['' ],
      observacionesHumedad:  ['' ],

      densidadSiembraMax:  ['' ],
      densidadSiembraMin:  ['' ],
      distanciaSurcos:  ['' ],
      distanciaPlantas:  ['' ],
      procesoPantacion:  ['' ],
      hilerasSurco: ['' ],

      procesoTerreno:  ['' ],
      profundidad:  ['' ],
      observacionesTerreno:  ['' ],

      carbohidratos:  ['' ],
      proteinas:  ['' ],
      grasas:  ['' ],
      calorias:  ['' ],
      observacionesNutricional:  ['' ],

      maximaProduccion:  ['' ],
      minimaProduccion:  ['' ],

      maximaAlmacenamiento:  ['' ],
      minimaAlmacenamiento:  ['' ],
      observacionesAlmacenamiento:  ['' ],

      desde:  ['' ],
      hasta:  ['' ],
      observacionesRecoleccion:  ['' ],

      epocaPrincipal:  ['' ],
      observacionesEpocaSiembra:  ['' ],

      maximoPh:  ['' ],
      minimoPh:  ['' ],
      observacionesSuelo:  ['' ],

      material:  ['' ],
      diasTransplante:  ['' ],
      maximoSemillas:  ['' ],
      minimoSemillas:  ['' ],
      recomendacionesSemillero:  ['' ],
      observacionesSemillero:  ['' ]

    });

  }

  ngOnInit(): void {
    this.readDatos();
  }

  agregarTaxonomia(){

    this.submitted = true;
    if(this.crearCultivo.invalid){
      return;
    }

    for (let index = 0; index < this.generos.length; index++) {
      if (this.crearCultivo.value.genero == this.generos[index].id) {
        var genero_aux = this.generos[index];
      }
    }
    
    for (let index = 0; index < this.familias.length; index++) {
      if (this.crearCultivo.value.familia == this.familias[index].id) {
        var familia_aux = this.familias[index];
      }
    }

    const taxonomia: any= {
      nombreComun: this.crearCultivo.value.nombreComun,
      familia: familia_aux,
      genero: genero_aux,
      especie: this.crearCultivo.value.especie,
      nombreCientifico: this.crearCultivo.value.nombreCientifico,
    };

    this.cultivoService.create(taxonomia, "taxonomia")
    .subscribe(
      response => {
        console.log(response);
        this.taxonomia = response;
        this.agregarMorfologia();
      },
      error => {
        console.log(error);
      });

  }

  agregarMorfologia(){
    
    const morfologia: any= {
      raiz: this.crearCultivo.value.raiz,
      hojas: this.crearCultivo.value.hojas,
      tallo: this.crearCultivo.value.tallo,
      inflorescencia: this.crearCultivo.value.inflorescencia,
      semilla: this.crearCultivo.value.semilla
    };

    this.cultivoService.create(morfologia, "morfologia")
    .subscribe(
      response => {
        console.log(response);
        this.morfologia = response;
        this.agregarTamanio();
      },
      error => {
        console.log(error);
      });
    
  }

  agregarTamanio(){
    const tamanio: any= {
      altura: this.crearCultivo.value.altura,
      diametro: this.crearCultivo.value.diametro,
    };
    this.cultivoService.create(tamanio, "tamanio")
    .subscribe(
      response => {
        console.log(response);
        this.tamanio = response;
        this.agregarTemperatura();
      },
      error => {
        console.log(error);
      });
  }

  agregarTemperatura(){
    const temperatura: any= {
      optimaMax: this.crearCultivo.value.TempOptimaMaxima,
      optimaMin: this.crearCultivo.value.TempOptimaMinima,
      tempCrecimientoMin: this.crearCultivo.value.TempGerminacionCrecimiento,
      tempGerminacionMax: this.crearCultivo.value.TempGerminacionMaxima,
      tempGerminacionMin: this.crearCultivo.value.TempGerminacionMinima,
      observaciones: this.crearCultivo.value.observacionesTemp,
    };
    this.cultivoService.create(temperatura, "temperatura")
    .subscribe(
      response => {
        console.log(response);
        this.temperatura = response;
        this.agregarHumedad();
      },
      error => {
        console.log(error);
      });
  }

  agregarHumedad(){
    const humedad: any= {
      humedadMax: this.crearCultivo.value.humedadMaxima,
      humedadMin: this.crearCultivo.value.humedadMinima,
      observaciones: this.crearCultivo.value.observacionesHumedad, 
    };
    this.cultivoService.create(humedad, "humedad")
    .subscribe(
      response => {
        console.log(response);
        this.humedad = response;
        this.agregarPlantacion();
      },
      error => {
        console.log(error);
      });
  }

  agregarPlantacion(){
    const plantacion: any= {
      densidadSiembraMax: this.crearCultivo.value.densidadSiembraMax,
      densidadSiembraMin: this.crearCultivo.value.densidadSiembraMin,
      distanciaSurcos: this.crearCultivo.value.distanciaSurcos,
      distanciaPlantas: this.crearCultivo.value.distanciaPlantas,
      proceso: this.crearCultivo.value.procesoPantacion,
      hilerasSurco: this.crearCultivo.value.hilerasSurco
    };
    this.cultivoService.create(plantacion, "plantacion")
    .subscribe(
      response => {
        console.log(response);
        this.plantacion = response;
        this.agregarPreparacionTerreno();
      },
      error => {
        console.log(error);
      });
  }

  agregarPreparacionTerreno(){
    const preparacionTerreno: any= {
      proceso: this.crearCultivo.value.procesoTerreno,
      profundidad: this.crearCultivo.value.profundidad,
      observaciones: this.crearCultivo.value.observacionesTerreno,
    };
    this.cultivoService.create(preparacionTerreno, "preparacionTerreno")
    .subscribe(
      response => {
        console.log(response);
        this.preparacionTerreno = response;
        this.agregarValorNutricional();
      },
      error => {
        console.log(error);
      });
  }

  agregarValorNutricional(){
    const valorNutricional: any= {
      carbohidratos: this.crearCultivo.value.carbohidratos,
      proteinas: this.crearCultivo.value.proteinas,
      grasas: this.crearCultivo.value.grasas,
      calorias: this.crearCultivo.value.calorias,
      observaciones: this.crearCultivo.value.observacionesNutricional,
    };
    this.cultivoService.create(valorNutricional, "valorNutricional")
    .subscribe(
      response => {
        console.log(response);
        this.valorNutricional = response;
        this.agregarProduccionPromedio();
      },
      error => {
        console.log(error);
      });
  }

  agregarProduccionPromedio(){
    const produccionPromedio: any= {
      produccionMax: this.crearCultivo.value.maximaProduccion,
      produccionMin: this.crearCultivo.value.minimaProduccion,
    };
    this.cultivoService.create(produccionPromedio, "produccionPromedio")
    .subscribe(
      response => {
        console.log(response);
        this.produccionPromedio = response;
        this.agregarAlmacenamiento();
      },
      error => {
        console.log(error);
      });
  }

  agregarAlmacenamiento(){
    const almacenamiento: any= {
      tempMax: this.crearCultivo.value.maximaAlmacenamiento,
      tempMin: this.crearCultivo.value.minimaAlmacenamiento,
      observaciones: this.crearCultivo.value.observacionesAlmacenamiento,
    };
    this.cultivoService.create(almacenamiento, "almacenamiento")
    .subscribe(
      response => {
        console.log(response);
        this.almacenamiento = response;
        this.agregarRecoleccion();
      },
      error => {
        console.log(error);
      });
  }

  agregarRecoleccion(){
    const recoleccion: any= {
      desde: this.crearCultivo.value.desde,
      hasta: this.crearCultivo.value.hasta,
      observaciones: this.crearCultivo.value.observacionesRecoleccion, 
    };
    this.cultivoService.create(recoleccion, "recoleccion")
    .subscribe(
      response => {
        console.log(response);
        this.recoleccion = response;
        this.agregarEpocaSiembra();
      },
      error => {
        console.log(error);
      });
  }

  agregarEpocaSiembra(){
    const epocaSiembra: any= {
      epocaPrincipal: this.crearCultivo.value.epocaPrincipal,
      observaciones: this.crearCultivo.value.observacionesEpocaSiembra,
    };
    this.cultivoService.create(epocaSiembra, "epocaSiembra")
    .subscribe(
      response => {
        console.log(response);
        this.epocaSiembra = response;
        this.agregarSuelo();
      },
      error => {
        console.log(error);
      });
  }

  agregarSuelo(){
    const suelo: any= {
      phMax: this.crearCultivo.value.maximoPh,
      phMin: this.crearCultivo.value.minimoPh,
      observaciones: this.crearCultivo.value.observacionesSuelo,
    };
    this.cultivoService.create(suelo, "suelo")
    .subscribe(
      response => {
        console.log(response);
        this.suelo = response;
        this.agregarSemilleroo();
      },
      error => {
        console.log(error);
      });
  }

  agregarSemilleroo(){
    const semillero: any= {
      material: this.crearCultivo.value.material,
      diasTransplante: this.crearCultivo.value.diasTransplante,
      cantidadSemillasMax: this.crearCultivo.value.maximoSemillas,
      cantidadSemillasMin: this.crearCultivo.value.minimoSemillas,
      recomendaciones: this.crearCultivo.value.recomendacionesSemillero,
      observaciones: this.crearCultivo.value.observacionesSemillero,
    };
    this.cultivoService.create(semillero, "semillero")
    .subscribe(
      response => {
        console.log(response);
        this.semillero = response;
        this.agregarCultivo();
      },
      error => {
        console.log(error);
      });
  }

  agregarCultivo(){
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

      taxonomia: this.taxonomia,
      morfologia: this.morfologia,
      tamanio: this.tamanio,
      temperatura: this.temperatura,
      humedad: this.humedad,
      plantacion: this.plantacion,
      preparacionTerreno: this.preparacionTerreno,
      valorNutricional: this.valorNutricional,
      produccionPromedio: this.produccionPromedio,
      almacenamiento: this.almacenamiento,
      recoleccion: this.recoleccion,
      epocaSiembra: this.epocaSiembra,
      suelo: this.suelo,
      semillero: this.semillero,
      
      // fecha del sistema
      //fechaCreacion: new Date(),
      //fechaActualizacion : new Date()

    };
    //Creacion de Cultivo a traves de la API
    
    this.cultivoService.create(cultivo, "cultivo")
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  readDatos(): void {
    this.itemCatalogoService.readAll()
      .subscribe(
          data => {
          for (let index = 0; index < data.length; index++) {
            if (1 == data[index].catalogo.id) {
              this.familias.push(data[index]);
            }else{
              if(2 == data[index].catalogo.id){
                this.generos.push(data[index]);
              }
            }
          }
        },
        error => {
          console.log(error);
        });
  }
  
}
