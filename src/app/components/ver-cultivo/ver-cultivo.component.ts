import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CultivoService } from 'src/app/services/cultivo.service';
import { VariedadService } from 'src/app/services/variedad.service';


@Component({
  selector: 'app-ver-cultivo',
  templateUrl: './ver-cultivo.component.html',
  styleUrls: ['./ver-cultivo.component.css']
})
export class VerCultivoComponent implements OnInit {

  id: string | null;
  cultivos: any ;
  variedades: any []= [] ;

  nombre = "";
  constructor(private aRoute: ActivatedRoute,
              private cultivoService: CultivoService,
              private variedadesService: VariedadService ) { 
    
    this.id = this.aRoute.snapshot.paramMap.get('id');
    this.verCultivo();
  }
  
  ngOnInit(): void {
    this.verCultivo();
  }
  verCultivo(){
    
    if (this.id != null) {
      this.cultivoService.read(this.id).subscribe(data => {
        this.nombre = data.nombre;
        this.cultivos = data;
       
      });
      
  
      this.variedadesService.readAll().subscribe(data => {
        this.variedades = [];
        
        for (let index = 0; index < Array.length; index++) {
          if (this.id == data[index].cultivo.id) {
            data.forEach((element:any )=> {
              this.variedades.push({
                id: element.id,
                ...element
              })
            });
          }
        }

      });
  
      
    }
    
  }
 
}
