import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getUser } from './Models/getUser';
import { User } from './Models/User';
import { Authority } from './Models/Authority';

@Injectable({
  providedIn: 'root'
})
export class AuthorityService {

  url = "http://localhost:8080/users/"

  authenticated:boolean = false;
  $currentUser

  constructor(private http : HttpClient) { }

  RegisterUser(user) {
    return this.http.post(this.url+"register", user);
  }

  CheckEmail(email:string) {
    return this.http.get(this.url+"public/check/"+email);
  }

  getUser(email:string){
    return this.http.get<getUser>(this.url+"auth/email/"+email)
  }

  authenticate(email:string, password:string) {
    let autho : Authority =<Authority> new Object();
    autho.email = email
    autho.password = password
    return this.$currentUser = this.http.post<User>(this.url+"public/authenticate", autho);
  }
}
