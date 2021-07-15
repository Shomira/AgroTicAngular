import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MonitoreoGeneralService } from 'src/app/services/monitoreo-general.service';

@Component({
  selector: 'app-monitoreos',
  templateUrl: './monitoreos.component.html',
  styleUrls: ['./monitoreos.component.css']
})
export class MonitoreosComponent implements OnInit {

  monitoreos: any [] = [];

  constructor(private monitoreoGeneralService: MonitoreoGeneralService,
              private aRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.readMonitoreos();
  }

  elegirPlanta(value:String){
    this.router.navigate(['/monitoreo-general', value]);
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
