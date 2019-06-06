import { Role } from "./Role";

export interface getUser {
    
    userId: string;
    firstName:string;
    lastName:string;
    email:string;
    address:string;
    gender: string;
    image: string;
    password:string;
    contactNumber:string;
    role : Role[];
}