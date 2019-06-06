import { Product } from './Product';

export class Promotion {
    promotionId:string
    promotionRate:number
    duration:number
    promotionName:string
    startDate:Date
    endDate:Date
    products:Product[]
}