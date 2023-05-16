import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCategory } from 'src/app/model/product-category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url: string = 'http://localhost:8080/market-bazaar/product-category';
  category !: ProductCategory
  constructor(private http:HttpClient) { }

  saveCategory(category:ProductCategory):Observable<any>{
    console.log("category", category);
    const options = new HttpHeaders({ 'Content-Type': 'application/json'})
    return this.http.post(this.url, category, {headers:options});
  }
}
