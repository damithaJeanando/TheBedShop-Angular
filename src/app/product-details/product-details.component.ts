import { Component, OnInit } from '@angular/core';
import { Product } from '../Models/Product';
import { Cart } from '../Models/Cart';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product : Product;

  cart : Cart = <Cart>{};

  constructor(private route: ActivatedRoute, private router: Router, private prodcutService:ProductService, private cartService : CartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      let id = param.get('id');
      this.prodcutService.getProduct(id).subscribe(product => {
        this.product = product;
      })
    })
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
      
      this.cartService.addToCart(cart);
    }
   
  }

}
