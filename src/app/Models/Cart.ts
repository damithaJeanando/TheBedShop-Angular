import { Product } from './Product';
export interface Cart {
    cartId : string;
    productId : string;
    amount : number;
    userId : string;
    price : number;
    name : string;
    
}