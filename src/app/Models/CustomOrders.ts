import { OrderItem } from './OrderItem';

export class CustomOrders {
    
    orderId:String;
    userEmail:String;
    orderDate:Date;
    address:string;
    totalAmount:number;
    orderItems:OrderItem[];

}