import { HttpClient } from '@angular/common/http';
import { Product } from './../interfaces/product';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment.prod';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdServService {
  private url = environment.PROD_PATH;

  constructor(private _http: HttpClient) { }

  public getAllProducts(): Observable<Product[]>{
    return this._http.get<Product[]>(this.url)
  }

  public updateProducts(data:Product){
    return this._http.put(`${this.url}${data.id}`, data)
  }

  public getByID(id: number){
    return this._http.get<Product>(`${this.url}${id}`)
  }

  public createProducts(data:Product[]): Observable<any>{
    return this._http.post<Product[]>(this.url, data)
  }

  public deleteProduct(id: number): Observable<any>{
    return this._http.delete<Product>(`${this.url}${id}`)
  }
}
