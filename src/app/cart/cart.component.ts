import { Component, OnInit } from '@angular/core';
import { Cart } from '../Models/Cart';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  userEmail = sessionStorage.getItem("email");
  cartItems : Cart[];
  total = 0
  
  constructor(private cartService : CartService, private router:Router) { }

  ngOnInit() {
    if(sessionStorage.getItem("email") == "no_user"){
      this.router.navigate(['login'])
    }else{
      this.cartService.getCartItems().subscribe(cartItems => {
      this.cartItems = cartItems
      // this.cartItems = (this.userId) ? this.products.filter(p=>p.pName.toLowerCase().includes(query.toLowerCase()) || p.pDescription.toLowerCase().includes(query.toLowerCase())) : this.products;

      this.calTotal();
    })
    }
    
  }

  deleteCartItem(productId){
    this.cartService.deleteCartItem(productId).subscribe(res => {
      console.log(res)
      this.ngOnInit();

    });
      
  }

  onQuantityChange(units, i){
    if(units != null)
    this.cartItems[i].quantity = units;
    this.total = 0
    this.cartService.addItemsToCart(this.cartItems).subscribe(res => {
      console.log(res);
    })
    this.calTotal();
  }

  calTotal() {
    for(let cartItem of this.cartItems){
      this.total = cartItem.quantity*cartItem.product.price + this.total;
    }
  }
}
