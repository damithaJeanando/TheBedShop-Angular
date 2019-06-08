import { CustomOrders } from './../Models/CustomOrders';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../Models/Cart';
import { Product } from '../Models/Product';
import { getUser } from '../Models/getUser';
import { CartService } from '../cart.service';
import { AuthorityService } from '../authority.service';
import { CustomOrdersService } from '../custom-orders.service';
import { Router } from '@angular/router';
import { OrderItem } from '../Models/OrderItem';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cartList: Cart[] = [];
  cartListLength
  total = 0;
  product: Product = < Product > new Object();
  validCheckout:boolean = false;
  email = sessionStorage.getItem("email")
  user:getUser=<getUser> new Object();
  
  constructor(private cartService: CartService, private authorityService:AuthorityService, private customOrdersService:CustomOrdersService, private router:Router) { }

  ngOnInit() {
    this.authorityService.getUser(this.email).subscribe(user => {
      this.user = user;
    })
    this.cartService.getCartItems().subscribe(res => {
      this.cartList = res;
      this.cartListLength = this.cartList.length;
      
      this.calTotal();
    })
  }

  calTotal() {
    for (let cartItem of this.cartList) {
      this.total = cartItem.quantity * cartItem.product.price + this.total;
    }
  }

  checkout(){
    var customOrders:CustomOrders =<CustomOrders> new Object();
    
    customOrders.address = this.user.address;
    customOrders.totalAmount = this.total;
    customOrders.userEmail = this.email;

    var orderItems:OrderItem[] = []
    for(let cartItem of this.cartList){
    var salesOrderItem:OrderItem =<OrderItem> new Object();
      salesOrderItem.product = cartItem.product;
      salesOrderItem.quantity = cartItem.quantity;
      
      orderItems.push(salesOrderItem);
    }

    customOrders.orderItems = orderItems;
    console.log(customOrders)
      this.customOrdersService.addOrders(customOrders).subscribe(order => {
        console.log(order)
        this.router.navigate(['view-orders'])
      },
      err => console.log(err));

      this.cartService.deleteCartItemsByUser(this.user.email).subscribe(res => console.log(res))
  }
}
