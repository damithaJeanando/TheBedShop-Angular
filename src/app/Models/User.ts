import { Role } from "./Role";

export interface User {
    
    userId: string;
    firstName:string;
    lastName:string;
    email:string;
    address:string;
    gender: string;
    userImage: string;
    password:string;
    contactNumber:string;
    role : string;
}