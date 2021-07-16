import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlagaEnfermedadService } from 'src/app/services/plaga-enfermedad.service';

@Component({
  selector: 'app-plaga-enfermedad',
  templateUrl: './plaga-enfermedad.component.html',
  styleUrls: ['./plaga-enfermedad.component.css']
})
export class PlagaEnfermedadComponent implements OnInit {
  crearPlagaEnfermedad: FormGroup;
  submitted = false;
  plagasEnfermedades: any [] = [];
  idEliminar: String = "";

  constructor(private fb: FormBuilder, private plagaEnfermedadService: PlagaEnfermedadService) {
    this.crearPlagaEnfermedad = this.fb.group({
      nombre: ['', [Validators.required, Validators.maxLength(10)]],
      nombreCientifico:  ['', Validators.required],
    })

  }

  ngOnInit(): void {
    this.readPlagasEnfermedades();
    
  }

  agregarPlagaEnfermedad(){

    // validacion de los campos llenados
    this.submitted = true;
    
    if(this.crearPlagaEnfermedad.invalid){
      return;
    }
    const plagaEnfermedad: any= {
      nombre: this.crearPlagaEnfermedad.value.nombre,
      nombreCientifico: this.crearPlagaEnfermedad.value.nombreCientifico,
      // fecha del sistema
      // fechaCreacion: new Date(),
      // fechaActualizacion : new Date()

    }
    
    this.plagaEnfermedadService.create(plagaEnfermedad)
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

  readPlagasEnfermedades(): void {
    this.plagaEnfermedadService.readAll()
      .subscribe(data => {
        this.plagasEnfermedades = data;
      },
      error => {
        console.log(error);
      });
  }

  get nombre() { return this.crearPlagaEnfermedad.get('nombre'); }
  get nombreCientifico() { return this.crearPlagaEnfermedad.get('nombreCientifico'); }

  getIdEliminar(id: String){
    this.idEliminar = id;
  }

  eliminarPlagaEnfermedad(){
    this.plagaEnfermedadService.delete(this.idEliminar)
      .subscribe(data => {
        console.log(data);
        location.reload();
      },
      error => {
        console.log(error);
      });
  }

}
