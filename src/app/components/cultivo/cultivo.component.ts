import { Component, OnInit } from '@angular/core';
import { CultivoPlagaEnfermedadService } from 'src/app/services/cultivo-plaga-enfermedad.service';
import { CultivoService } from 'src/app/services/cultivo.service';
import { PlagaEnfermedadService } from 'src/app/services/plaga-enfermedad.service';
import { VariedadService } from 'src/app/services/variedad.service';

@Component({
  selector: 'app-cultivo',
  templateUrl: './cultivo.component.html',
  styleUrls: ['./cultivo.component.css']
})
export class CultivoComponent implements OnInit {

  cultivos: any [] = [];
  variedades: any[] = [];
  cultivosPlagasEnfermedades: any[] = [];
  plagasEnfermedades: any[] = [];
  idEliminar: String = "";

  constructor(private cultivoService: CultivoService, 
              private variedadService: VariedadService,
              private cultivoPlagaEnfermedadService: CultivoPlagaEnfermedadService,
              private plagaEnfermeddadService: PlagaEnfermedadService) { }

  ngOnInit(): void {
    this.readCultivos();
    this.readPlagasEnfermedades();
  }

  readCultivos(): void {
    this.cultivoService.readAll().subscribe(data => {
      this.cultivos = data;
    },
    error => {
      console.log(error);
    });
  }

  readPlagasEnfermedades(): void {
    this.plagaEnfermeddadService.readAll().subscribe(data => {
      this.plagasEnfermedades = data;
      console.log(this.plagasEnfermedades);
    },
    error => {
      console.log(error);
    });
  }

  getVariedades(id: String){
    this.variedades = [];
    this.variedadService.readAll().subscribe(data => {
      data.forEach((element:any )=> {
        if(id == element.cultivo.id){
          this.variedades.push(element);
        }
      });
    },
    error => {
      console.log(error);
    });
  }

  getCultivoPlagaEnfermedad(id: String){
    this.cultivosPlagasEnfermedades = [];
    this.cultivoPlagaEnfermedadService.readAll().subscribe(data => {
      data.forEach((element:any )=> {
        if(id == element.cultivo.id){
          this.cultivosPlagasEnfermedades.push(element);
        }
      });
    },
    error => {
      console.log(error);
    });
  }

  getIdEliminar(id: String){
    this.idEliminar = id;
  }

  eliminarVariedad(){
    this.variedadService.delete(this.idEliminar)
      .subscribe(data => {
        console.log(data);
        location.reload();
      },
      error => {
        console.log(error);
      });
  }
  eliminarPlagaEnfermedad(){
    this.cultivoPlagaEnfermedadService.delete(this.idEliminar)
      .subscribe(data => {
        console.log(data);
        location.reload();
      },
      error => {
        console.log(error);
      });
  }
  eliminarCultivo(){
    this.cultivoService.delete(this.idEliminar)
      .subscribe(data => {
        console.log(data);
        location.reload();
      },
      error => {
        console.log(error);
      });
  }

}
