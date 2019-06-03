import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './Models/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) { }

  url = "http://localhost:8080/category/";

  getCategories() {
    return this.http.get<Category[]>(this.url+"public/all");
  }

  addCategory(categoryName){
    return this.http.post<Category>(this.url+"add", categoryName).
    subscribe(category => {
      console.log(category.name + " sucessfully added")
    },
    err => {
      console.log(categoryName + "Couldn't post"+ err)
    });

  }

}
