import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-items-catalogo',
  templateUrl: './items-catalogo.component.html',
  styleUrls: ['./items-catalogo.component.css']
})
export class ItemsCatalogoComponent implements OnInit {

  creatItemsCatalogo: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.creatItemsCatalogo = this.fb.group({
      nombre: ['', Validators.required],
      codigo:  ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  agregarItemsCatalogo(){

    // validacion de los campos llenados
    this.submitted = true;
    if(this.creatItemsCatalogo.invalid){
      return;
    }
    const ItemsCatalogo: any= {
      nombre: this.creatItemsCatalogo.value.nombre,
      codigo: this.creatItemsCatalogo.value.codigo,
      // fecha del sistema
      fechaCreacion: new Date(),
      fechaActualizacion : new Date()


    }
    console.log(ItemsCatalogo);

  }

}
