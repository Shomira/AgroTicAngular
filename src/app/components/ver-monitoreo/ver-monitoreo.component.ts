import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MonitoreoGeneralService } from 'src/app/services/monitoreo-general.service';
import { MonitoreoPlantaService } from 'src/app/services/monitoreo-planta.service';

@Component({
  selector: 'app-ver-monitoreo',
  templateUrl: './ver-monitoreo.component.html',
  styleUrls: ['./ver-monitoreo.component.css']
})
export class VerMonitoreoComponent implements OnInit {
  id: string | null;
  monitoreo: any ;
  monitoreosP: any  ;
  constructor(private aRoute: ActivatedRoute,
              private  monitoreoGeneralService: MonitoreoGeneralService ,
              private  monitoreoPlantaService: MonitoreoPlantaService ) { 
    this.id = this.aRoute.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
    this.verMonitoreo();
  }
  verMonitoreo(){
    
    if (this.id != null) {
      this.monitoreoGeneralService.read(this.id).subscribe(data => {
        this.monitoreo = data;
     
      });
      this.monitoreoPlantaService.readAll().subscribe(data => {
        this.monitoreosP= [];
        for (let index = 0; index < data.length; index++) {
          if (this.id == data[index].monitoreoGeneral.id) {
              this.monitoreosP.push(
                data[index]
              )
          }
        }
      });
      
    }
  }
}
