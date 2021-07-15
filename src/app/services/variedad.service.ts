import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const baseURL='http://127.0.0.1:8081/variedades';
@Injectable({
  providedIn: 'root'
})
export class VariedadService {

  constructor(private httpClient: HttpClient) {

  }

 readAll(): Observable<any> {
   return this.httpClient.get(baseURL);
 }

 read(id: any): Observable<any> {
   return this.httpClient.get(`${baseURL}/${id}`);
 }

 create(data: any): Observable<any> {
   return this.httpClient.post(baseURL, data);
 }

 update(id: any, data: any): Observable<any> {
   return this.httpClient.put(`${baseURL}/${id}`, data);
 }

 delete(id: any): Observable<any> {
   return this.httpClient.delete(`${baseURL}/${id}`);
 }

 deleteAll(): Observable<any> {
   return this.httpClient.delete(baseURL);
 }

 searchByName(name: any): Observable<any> {
   return this.httpClient.get(`${baseURL}?name=${name}`);
 }
}
