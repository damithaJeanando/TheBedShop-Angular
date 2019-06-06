import { Promotion } from './Promotion';

export interface Product {
    
    productId: string;
    productName:string;
    productCategory:string;
    productDescription:string;
    productPrice: number;
    productQuantity:number;
    productImage:string;
    promotion:Promotion;

}