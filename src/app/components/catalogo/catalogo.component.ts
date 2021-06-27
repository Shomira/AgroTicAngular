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
  catalogos: any;

  constructor(private fb: FormBuilder, private catalogoService: CatalogoService) {
    this.crearCatalogo = this.fb.group({
      nombre: ['', Validators.required],
      descripcion:  ['', Validators.required]
     
    })

  }

  ngOnInit(): void {
    // this.readCatalogos();
  }

  agregarCatalogo(){

    // validacion de los campos llenados
    this.submitted = true;
    if(this.crearCatalogo.invalid){
      return;
    }
    const catalogo: any= {
      nombre: this.crearCatalogo.value.nombre,
      descripcion: this.crearCatalogo.value.descripcion,
      // fecha del sistema
      fechaCreacion: new Date(),
      fechaActualizacion : new Date()


    }
    console.log(catalogo);
    /* Creacion de catalogo a traves de la API
    this.catalogoService.create(catalogo)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
    */
  }

  readCatalogos(): void {
    this.catalogoService.readAll()
      .subscribe(
        catalogos => {
          this.catalogos = catalogos;
          console.log(catalogos);
        },
        error => {
          console.log(error);
        });
  }

}
