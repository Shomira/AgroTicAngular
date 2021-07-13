import { Component, OnInit } from '@angular/core';
import { CultivoService } from 'src/app/services/cultivo.service';

@Component({
  selector: 'app-cultivo',
  templateUrl: './cultivo.component.html',
  styleUrls: ['./cultivo.component.css']
})
export class CultivoComponent implements OnInit {

  cultivos: any;

  constructor(private cultivoService: CultivoService) { }

  ngOnInit(): void {
    this.readCultivos(); 
  }

  readCultivos(): void {
    this.cultivoService.readAll()
      .subscribe(
        cultivos => {
          this.cultivos = cultivos;
          console.log(cultivos);
        },
        error => {
          console.log(error);
        });
  }


}
