import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseURL = 'http://localhost:8081/cultivos';
const taxonomiaURL = 'http://localhost:8081/taxonomias';
const morfologiaURL = 'http://localhost:8081/morfologias';
const tamanioURL = 'http://localhost:8081/tamanios';
const temperaturaURL = 'http://localhost:8081/temperaturas';
const humedadURL = 'http://localhost:8081/humedades';
const plantacionURL = 'http://localhost:8081/plantaciones';
const preparacionTerrenoURL = 'http://localhost:8081/preparacion_terrenos';
const valorNutricionalURL = 'http://localhost:8081/valores_nutricionales';
const produccionPromedioURL = 'http://localhost:8081/producciones_promedio';
const almacenamientoURL = 'http://localhost:8081/almacenamientos';
const recoleccionURL = 'http://localhost:8081/recolecciones';
const epocaSiembraURL = 'http://localhost:8081/epocas_siembra';
const sueloURL = 'http://localhost:8081/suelos';
const semilleroURL = 'http://localhost:8081/semilleros';


@Injectable({
  providedIn: 'root'
})
export class CultivoService {

  constructor(private httpClient: HttpClient) { }

  readAll(): Observable<any> {
    return this.httpClient.get(baseURL);
  }

  read(id: any): Observable<any> {
    return this.httpClient.get( `${baseURL}/${id}`);
  }

  create(data: any, tabla: String): Observable<any> {
    switch (tabla) {
      case "cultivo":
        return this.httpClient.post(baseURL, data);
      case "taxonomia":
        return this.httpClient.post(taxonomiaURL, data);
      case "morfologia":
        return this.httpClient.post(morfologiaURL, data);
      case "tamanio":
        return this.httpClient.post(tamanioURL, data);
      case "temperatura":
        return this.httpClient.post(temperaturaURL, data);
      case "humedad":
        return this.httpClient.post(humedadURL, data);
      case "plantacion":
        return this.httpClient.post(plantacionURL, data);
      case "preparacionTerreno":
        return this.httpClient.post(preparacionTerrenoURL, data);
      case "valorNutricional":
        return this.httpClient.post(valorNutricionalURL, data);
      case "produccionPromedio":
        return this.httpClient.post(produccionPromedioURL, data);
      case "almacenamiento":
        return this.httpClient.post(almacenamientoURL, data);
      case "recoleccion":
        return this.httpClient.post(recoleccionURL, data);
      case "epocaSiembra":
        return this.httpClient.post(epocaSiembraURL, data);
      case "suelo":
        return this.httpClient.post(sueloURL, data);
      case "semillero":
        return this.httpClient.post(semilleroURL, data);
    }
    return this.httpClient.post(baseURL, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.httpClient.put(`${baseURL}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    this.httpClient.delete(`${taxonomiaURL}/${id}`);
    this.httpClient.delete(`${morfologiaURL}/${id}`);
    this.httpClient.delete(`${tamanioURL}/${id}`);
    this.httpClient.delete(`${temperaturaURL}/${id}`);
    this.httpClient.delete(`${humedadURL}/${id}`);
    this.httpClient.delete(`${plantacionURL}/${id}`);
    this.httpClient.delete(`${preparacionTerrenoURL}/${id}`);
    this.httpClient.delete(`${valorNutricionalURL}/${id}`);
    this.httpClient.delete(`${produccionPromedioURL}/${id}`);
    this.httpClient.delete(`${almacenamientoURL}/${id}`);
    this.httpClient.delete(`${recoleccionURL}/${id}`);
    this.httpClient.delete(`${epocaSiembraURL}/${id}`);
    this.httpClient.delete(`${sueloURL}/${id}`);
    this.httpClient.delete(`${semilleroURL}/${id}`);
    return this.httpClient.delete(`${baseURL}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(baseURL);
  }

  searchByName(name: any): Observable<any> {
    return this.httpClient.get(`${baseURL}?name=${name}`);
  }
  
}
