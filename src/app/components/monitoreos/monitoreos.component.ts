import { Component, OnInit } from '@angular/core';
import { MonitoreoGeneralService } from 'src/app/services/monitoreo-general.service';

@Component({
  selector: 'app-monitoreos',
  templateUrl: './monitoreos.component.html',
  styleUrls: ['./monitoreos.component.css']
})
export class MonitoreosComponent implements OnInit {

  monitoreosGenerales: any;

  constructor(private monitoreoGeneralService: MonitoreoGeneralService) { }

  ngOnInit(): void {
  }

  readMonitoreos(): void {
    this.monitoreoGeneralService.readAll()
      .subscribe(
        monitoreosGenerales => {
          this.monitoreosGenerales = monitoreosGenerales;
          console.log(monitoreosGenerales);
        },
        error => {
          console.log(error);
        });
  }

}
