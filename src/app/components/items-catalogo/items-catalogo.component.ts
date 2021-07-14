import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ItemsCatalogoService } from 'src/app/services/items-catalogo.service';

@Component({
  selector: 'app-items-catalogo',
  templateUrl: './items-catalogo.component.html',
  styleUrls: ['./items-catalogo.component.css']
})
export class ItemsCatalogoComponent implements OnInit {

  creatItemsCatalogo: FormGroup;
  submitted = false;
  itemsCatalogos: any [] = [];
  id: string | null;

  constructor(private fb: FormBuilder, 
              private itemsCatalogoService: ItemsCatalogoService,
              private aRoute: ActivatedRoute ) {
    this.creatItemsCatalogo = this.fb.group({
      nombre: ['', Validators.required],
      codigo:  ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    
  }

  ngOnInit(): void {
    this.readItemsCatalogos();
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
    /* Creacion de Items de Catalogo a traves de la API
    this.itemsCatalogoService.create(ItemsCatalogo)
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

  readItemsCatalogos(){
    if (this.id != null) {
      this.itemsCatalogoService.read(this.id).subscribe(data => {
        this.itemsCatalogos = [];
        // Un Item
        if (Array.length <= 1) {
          this.itemsCatalogos.push({
            nombre: data.nombreItem,
            id: data.id
           })

        // Varios Items
        } else if (Array.length > 1)   {
          data.forEach((element:any )=> {
            this.itemsCatalogos.push({
              id: data.id,
              ...element
            })

          });
        }
      });
      
    }
  }


}
