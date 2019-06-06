import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:8080/product/";

  email = sessionStorage.getItem("email")
  password = sessionStorage.getItem("password")

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
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.email + ':' + this.password)});

    return this.http.post<Product>(this.url+"auth/add", product, {headers});
  }

  deleteProduct(productId){
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(this.email + ':' + this.password)});

    return this.http.delete(this.url+"auth/"+productId, {headers});
  }
}
