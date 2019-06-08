import { Component, OnInit, OnDestroy } from '@angular/core';
import { Product } from '../Models/Product';
import { Category } from '../Models/Category';
import { Subscription } from 'rxjs';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit, OnDestroy {

  products : Product[] =[];
  filteredProducts : Product[] = [];
  category : Category;
  subscription : Subscription;
  categories$ 
  
  constructor(private productService : ProductService, private categoryService : CategoryService) { }

  ngOnInit() {
    this.subscription = this.productService.getProducts().subscribe(products => {
      this.filteredProducts = this.products = products;
    }, err => {
      console.log(err)
    });
    
    this.categories$ = this.categoryService.getCategories();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addCategory() {
    
    var categoryName = prompt("Enter new category name");
    
    if(categoryName!=null || categoryName != ""){
      // this.category.name = categoryName;
      console.log(categoryName);
      this.categoryService.addCategory(categoryName).subscribe (res => console.log);
    }
  }

  filter(query:string){
    // console.log(query);
    this.filteredProducts = (query) ? this.products.filter(p=>p.name.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase())) : this.products;
  }

  deleteProduct(productId){
    console.log(productId)
    this.productService.deleteProduct(productId).subscribe(res => {
      console.log(res);
      this.ngOnInit();
    })
  }
}
