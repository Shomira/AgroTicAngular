import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonitoreoPlantaService } from 'src/app/services/monitoreo-planta.service';

@Component({
  selector: 'app-ver-monitoreo-planta',
  templateUrl: './ver-monitoreo-planta.component.html',
  styleUrls: ['./ver-monitoreo-planta.component.css']
})
export class VerMonitoreoPlantaComponent implements OnInit {

  id: string | null;

  monitoreoP: any  ;
  fertilizantes: any [] = [];
  constructor(private aRoute: ActivatedRoute,
              private  monitoreoPlantaService: MonitoreoPlantaService ) { 
    this.id = this.aRoute.snapshot.paramMap.get('id');

  }
  ngOnInit(): void {
    this.verMonitoreoPlanta();
  }
  verMonitoreoPlanta(){
    
    if (this.id != null) {
      this.monitoreoPlantaService.read(this.id).subscribe(data => {
          if (this.id == data.id) {
            this.monitoreoP = data;
            console.log(data);
         
          }
      });
    }
  }

}
