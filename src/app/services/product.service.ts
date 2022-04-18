import { Injectable } from '@angular/core';
//Directivas usadas para hacer peticiones HTTP al servidor
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//Modelo de un producto
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  configUrl = 'assets/data.json';
  //Se hace referencia de la directiva HttpClient en una variable 'private' 'http'
  constructor(private http: HttpClient) {}
  //Se invoca un array de productos que espera como respuesta un Observable de tipo Product desde el archivo 'data.json'
  getProducts(): Observable<Product[]> {
    //Retorna un array de productos usando la referencia de 'http':HttpClient y el metodo 'get()' con la ruta 'configUrl' como parametro
    return this.http.get<Product[]>(this.configUrl);
  }
}
