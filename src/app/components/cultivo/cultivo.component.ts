import { Component, OnInit } from '@angular/core';
import { CultivoPlagaEnfermedadService } from 'src/app/services/cultivo-plaga-enfermedad.service';
import { CultivoService } from 'src/app/services/cultivo.service';
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

  constructor(private cultivoService: CultivoService, 
              private variedadService: VariedadService,
              private cultivoPlagaEnfermedad: CultivoPlagaEnfermedadService) { }

  ngOnInit(): void {
    this.readCultivos(); 
  }

  readCultivos(): void {
    this.cultivoService.readAll().subscribe(data => {
      this.cultivos = data;
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
    this.cultivoPlagaEnfermedad.readAll().subscribe(data => {
      console.log(data);
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

}
