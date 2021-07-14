import { Component, OnInit } from '@angular/core';
import { MonitoreoGeneralService } from 'src/app/services/monitoreo-general.service';

@Component({
  selector: 'app-monitoreos',
  templateUrl: './monitoreos.component.html',
  styleUrls: ['./monitoreos.component.css']
})
export class MonitoreosComponent implements OnInit {

  monitoreos: any [] = [];

  constructor(private monitoreoGeneralService: MonitoreoGeneralService) { }

  ngOnInit(): void {
    this.readMonitoreos();
  }

  readMonitoreos(): void {
    this.monitoreoGeneralService.readAll().subscribe(data => {
      this.monitoreos = [];
      data.forEach((element:any )=> {
        this.monitoreos.push({
          id: element.id,
          ...element
        })
      });

    },
    error => {
      console.log(error);
    });
  }

}
