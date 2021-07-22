import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CatalogoService } from 'src/app/services/catalogo.service';
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
  catalogo: any;
  idEliminar: String = "";

  constructor(private fb: FormBuilder, 
              private itemsCatalogoService: ItemsCatalogoService,
              private aRoute: ActivatedRoute,
              private catalogoService: CatalogoService) {
    this.creatItemsCatalogo = this.fb.group({
      nombre: ['', Validators.required],
      codigo:  ['', Validators.required]
    })
    this.id = this.aRoute.snapshot.paramMap.get('id');
    
  }

  ngOnInit(): void {
    this.readItemsCatalogos();
    if (this.id != null){
      this.catalogoService.read(this.id).subscribe(data => {
          this.catalogo = data;
      });
    }
  }

  agregarItemsCatalogo(){

    // validacion de los campos llenados
    this.submitted = true;
    if(this.creatItemsCatalogo.invalid){
      return;
    }
    const ItemsCatalogo: any= {
      nombreItem: this.creatItemsCatalogo.value.nombre,
      codigo: this.creatItemsCatalogo.value.codigo,
      catalogo: this.catalogo,
      // fecha del sistema
      // fechaCreacion: new Date(),
      // fechaActualizacion : new Date()
    }
    console.log(ItemsCatalogo);
    // Creacion de Items de Catalogo a traves de la API
    this.itemsCatalogoService.create(ItemsCatalogo)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          location.reload();
        },
        error => {
          console.log(error);
        });
  }

  readItemsCatalogos(){
    if (this.id != null) {
      this.itemsCatalogoService.readAll().subscribe(data => {
        this.itemsCatalogos = [];
        data.forEach((element:any )=> {
          if(element.catalogo.id == this.id){
            this.itemsCatalogos.push(element);
          }
        });
      });
      
    }
  }

  getIdEliminar(id: String){
    this.idEliminar = id;
  }

  eliminarItemsCatalogos(){
    this.itemsCatalogoService.delete(this.idEliminar)
      .subscribe(data => {
        console.log(data);
        location.reload();
      },
      error => {
        console.log(error);
      });
  }

}
