import { Product } from './Product';
export interface Cart {

    cartId : string;
    quantity : number;
    userEmail : string;
    product : Product;
    
}