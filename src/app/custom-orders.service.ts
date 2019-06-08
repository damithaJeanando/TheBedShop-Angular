import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomOrders } from './Models/CustomOrders';

@Injectable({
  providedIn: 'root'
})
export class CustomOrdersService {

  url = "http://localhost:8080/customOrders/";

  constructor(private http:HttpClient) { }

  getAllOrders(){
    return this.http.get<CustomOrders[]>(this.url)
  }

  getSalesOrder(id){
    return this.http.get<CustomOrders>(this.url+id);
  }

  getOrdersByUserEmail(userEmail:string){
    return this.http.get<CustomOrders[]>(this.url+"user/"+userEmail);
  }

  addOrders(customOrder:CustomOrders){

    return this.http.post<CustomOrders>(this.url+"add", customOrder);
  }
}
