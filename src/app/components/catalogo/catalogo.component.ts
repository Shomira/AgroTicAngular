import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CatalogoService } from 'src/app/services/catalogo.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  crearCatalogo: FormGroup;
  submitted = false;
  catalogos: any [] = [];

  constructor(private fb: FormBuilder, private catalogoService: CatalogoService) {
    this.crearCatalogo = this.fb.group({
      nombre: ['', Validators.required],
      descripcion:  ['', Validators.required]
     
    })

  }

  ngOnInit(): void {
    this.readCatalogos();
  }

  readCatalogos(): void {
    this.catalogoService.readAll()
      .subscribe(data => {
        this.catalogos = [];
          data.forEach((element:any )=> {
            this.catalogos.push({
              id: element.id,
              ...element
            })
      
          });
          console.log(this.catalogos);
    
        },
        error => {
          console.log(error);
        });
  }

}
