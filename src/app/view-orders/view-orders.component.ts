import { CustomOrders } from './../Models/CustomOrders';
import { Component, OnInit } from '@angular/core';
import { CustomOrdersService } from '../custom-orders.service';
import { AuthorityService } from '../authority.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-orders',
  templateUrl: './view-orders.component.html',
  styleUrls: ['./view-orders.component.css']
})
export class ViewOrdersComponent implements OnInit {

  orders:CustomOrders[] = []
  constructor(private customOrdersService:CustomOrdersService, private authoService:AuthorityService, private router:Router) { }
  email = sessionStorage.getItem("email")
  ngOnInit() {
    if(this.email != "no_user"){
      this.authoService.getUser(this.email).subscribe(user => {
        this.customOrdersService.getOrdersByUserEmail(user.email).subscribe(orders => {
        this.orders = orders;
      }, err => console.log("getting orders failed !!"))
        })
    }else{
      this.router.navigate(['login'])
    }
  }

}
