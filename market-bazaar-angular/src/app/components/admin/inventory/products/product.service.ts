import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { ProductCategory } from 'src/app/model/product-category.model';
import { Product } from 'src/app/model/product.model';
import { ProductPhoto } from 'src/app/model/product-photo.model';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url: string = 'http://localhost:8080/market-bazaar/product-category';
  productUrl: string = 'http://localhost:8080/market-bazaar/product';
  category!: ProductCategory;
  product!: Product;
  productPhoto!: ProductPhoto;
  constructor(private http: HttpClient) {}

  getCategory(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(this.url);
  }

  //Mapping results with Model productPhoto and then extracting from their to their respective data model
  saveProducts(formData: FormData): Observable<any> {
    
    // const data = {
    //   productPhoto: " ",
    //   product: {
    //     productName: productPhoto.productName,
    //     quantity: productPhoto.quantity,
    //     amount: productPhoto.amount,
    //     description: productPhoto.category,
    //     productCategory: {
    //       id: productPhoto.category,
    //       // categoryName: details.category,
    //     },
    //   },
    // };
    // const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.productUrl, formData);
  }
}
