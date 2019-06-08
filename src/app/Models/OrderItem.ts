import { Product } from './Product';
import { CustomOrders } from './CustomOrders';



export class OrderItem {
    
    orderItemId : String;
    product:Product;
    customOrders:CustomOrders;
    quantity:number;
}