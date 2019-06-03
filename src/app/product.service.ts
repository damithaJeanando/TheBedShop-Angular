import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080/product/";

  getProducts() {
    return this.http.get<Product[]>(this.url+"public/all");
  }

  getProductsByCategory(categoryId){
    return this.http.get<Product[]>(this.url+"public/category/"+categoryId)
  }

  getProduct(productId)  {
    
    return this.http.get<Product>(this.url+productId);
    
  }

  addProduct(product: Product) {
    return this.http.post<Product>(this.url+"admin/add", product).
            subscribe(product => {
              console.log(product.productName + " sucessfully added")
            },
            err => {
              console.log(product.productName + "Couldn't post"+ err)
            });
  }
}
