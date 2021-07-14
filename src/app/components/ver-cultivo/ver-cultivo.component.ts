import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CultivoService } from 'src/app/services/cultivo.service';

@Component({
  selector: 'app-ver-cultivo',
  templateUrl: './ver-cultivo.component.html',
  styleUrls: ['./ver-cultivo.component.css']
})
export class VerCultivoComponent implements OnInit {

  id: string | null;
  cultivos: any [] = [];
  nombre = "";
  constructor(private aRoute: ActivatedRoute,
              private cultivoService: CultivoService) { 
    
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }
  
  ngOnInit(): void {
    this.verCultivo();
  }
  verCultivo(){
    
    if (this.id != null) {
      this.cultivoService.read(this.id).subscribe(data => {
        this.nombre = data.nombre;
        this.cultivos = [];
          this.cultivos.push({
            nombre: data.nombre,
            origen: data.origen,
            cicloVida: data.cicloVida,
            riego: data.riego,


           })
      });

      
    }
  }
}
