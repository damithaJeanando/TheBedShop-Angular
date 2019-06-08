import { Component, OnInit } from '@angular/core';
import { Category } from '../Models/Category';
import { Product } from '../Models/Product';
import { CategoryService } from '../category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  categories : Category[] = [];
  selectedImage : File = null;
  preview:boolean = false;
  product:Product =<Product> new Object();
  
  constructor(private router : Router, private route: ActivatedRoute, private productService : ProductService, private categoryService : CategoryService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      let id = param.get("productId");
      if(id != null || id != ""){
        if(id == "new"){
          this.product = <Product> new Object();
        }else{
          this.productService.getProduct(id).subscribe(product => {
            this.product = product;
          })
        }
      }
    })
    this.getCategories();
  }

  public onSubmit() {
    
    if(this.product!=null){
      console.log(this.product);
      let prod = this.productService.addProduct(this.product).subscribe(product => {
        console.log(product.name + " sucessfully added")
      this.router.navigate(['admin/products']);

      },
      err => {
        console.log(this.product.name + "Couldn't post"+ err)
      });
      console.log(prod);

      return prod;
    }
    
  }

  previewCard(form){
    if(form != null){
      this.preview = true;
    this.product = form;
    }
    
  }

  public getCategories() {
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res;
    }, err => {
      console.log("Error fetching categories " + err)
    });
  }
}
