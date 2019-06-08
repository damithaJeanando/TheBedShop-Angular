import { Promotion } from './Promotion';

export interface Product {
    
    productId: string;
    name:string;
    categoryId:string;
    description:string;
    price: number;
    quantity:number;
    image:string;
    promotion:Promotion;

}