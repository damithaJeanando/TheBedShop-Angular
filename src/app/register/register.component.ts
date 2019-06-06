import { Component, OnInit } from '@angular/core';
import { Role } from '../Models/Role';
import { AuthorityService } from '../authority.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { User } from '../Models/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  roles : Role[] = [{'roleId': '2','role':'USER'}]
  
   userRole  =  ([{'roleId': '2','role':'USER'}])

  isEmailValid : boolean = true;
  formInvalid : boolean;
  
  constructor(private authorityService : AuthorityService, private router:Router) { }

  errorMsg = ""

  ngOnInit() {
  }

  onSubmit(form:FormGroup) {
    let user : User = form.value;
    let newUser : User = <User> new Object();
    newUser = user;
    newUser.role = "2";
    
    if(form.invalid) {
      this.formInvalid = true;
      console.log("user request did not send")
    }
    else{
      this.formInvalid = false
      this.authorityService.RegisterUser(newUser).subscribe(res => {
        console.log(res)
        this.router.navigate(['login'])
      }, err => console.log(err))
      
    }
  }

  onEmailBlur(email : string) {
  
    if(email != ""){
      if(email.includes("@")){
        this.authorityService.CheckEmail(email).subscribe(res=>{
          if(<boolean> res)
          this.isEmailValid = false
          this.errorMsg = "Email address is already exist"
        },
        err=>console.log(err));
      }
      else{
        this.isEmailValid = false;
        this.errorMsg = "Email address is not valid"
      }
    }
  }

}
