import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../Models/Product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { Cart } from '../Models/Cart';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input('product') product: Product;
  @Input('show-actions') showActions = true;

  pro : Product;
  dicountedPrice: number;

  constructor(private router : Router, private productService : ProductService, private cartService: CartService) { }

  ngOnInit() {
  }

  gotoProduct(productid) {
    
     console.log("pro");
     console.log(productid);
    this.productService.getProduct(productid).subscribe(pro => {
      
      this.pro = pro;
      this.router.navigate(['products', pro.productId])
    }, err => { 
      console.log(err);
    });
    
    
  }

  promotions(){
    if(this.pro.promotion != null){
     let promoPrice = this.pro.price * this.pro.promotion.promotionRate
     this.dicountedPrice = this.pro.price - promoPrice;
    }
  }

  addToCart(product:Product) {
    let email = sessionStorage.getItem('email');
    if(email == "no_user"){
      this.router.navigate(['login'])
    }else{
      let cart =<Cart> new Object();
      cart.product = product
      cart.userEmail = email;
      cart.quantity = 1;
      
      this.cartService.addToCart(cart).subscribe(res => {
        console.log(res)
      });
    }
   
  }

}
