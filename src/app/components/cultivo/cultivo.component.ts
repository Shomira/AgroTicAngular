import { Component, OnInit } from '@angular/core';
import { CultivoService } from 'src/app/services/cultivo.service';

@Component({
  selector: 'app-cultivo',
  templateUrl: './cultivo.component.html',
  styleUrls: ['./cultivo.component.css']
})
export class CultivoComponent implements OnInit {

  cultivos: any [] = [];

  constructor(private cultivoService: CultivoService) { }

  ngOnInit(): void {
    this.readCultivos(); 
  }

  readCultivos(): void {
    this.cultivoService.readAll().subscribe(data => {
      this.cultivos = [];
      data.forEach((element:any )=> {
        this.cultivos.push({
          id: element.id,
          ...element
        })
  
      });
      // console.log(this.cultivos);
    },
    error => {
      console.log(error);
    });
  }

}
