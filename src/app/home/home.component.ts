import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Models/Product';
import { Category } from '../Models/Category';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private service : ProductService, private categoryService : CategoryService, private dataService : DataService) { }

  products : Product[] = [];
  filteredProducts : Product[]
  categories : Category[];
  query : string;
  activeCategory : string;

  ngOnInit() {
    this.getAllProducts();
    this.categoryService.getCategories().subscribe(categories => {
      
      this.categories = categories})
  }

  public getAllProducts() {
    
    this.service.getProducts().subscribe(res =>{
      console.log("fetching products...");
       this.filteredProducts = this.products = res;
      console.log(this.products);
    }, err => {
      console.log("An error has occured during fetching products from the server -> " + err);
    })
  }

  filter(query:string) {
    this.filteredProducts  = (query) ? this.products.filter(p=>{
      return p.name.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase())
    }) : this.products;
    
}

filterProducts(categoryId) {
  console.log(categoryId)
  
  this.activeCategory = categoryId;
  if(categoryId == "-1"){
    this.getAllProducts();
  }else
  {
    this.service.getProductsByCategory(categoryId).subscribe(res => {
    this.filteredProducts = res;
    console.log(res);
  })
}
}
}
