import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  crearCatalogo: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.crearCatalogo = this.fb.group({
      nombre: ['', Validators.required],
      descripcion:  ['', Validators.required]
     
    })

  }

  ngOnInit(): void {
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

  }

}
