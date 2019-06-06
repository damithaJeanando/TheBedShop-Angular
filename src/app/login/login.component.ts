import { Component, OnInit } from '@angular/core';
import { AuthorityService } from '../authority.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMsg = '';

  constructor(private authorityService:AuthorityService, private router:Router) { }

  ngOnInit() {
    if(sessionStorage.getItem("email") != "no_user"){
      this.router.navigate(['home'])
    }
  }

  authenticateUser(form){

    console.log(form);

    this.authorityService.authenticate(form.email, form.password).subscribe(user => {
      if(user != null){
        console.log(user);
        sessionStorage.setItem("email", user.email)
        sessionStorage.setItem("password", user.password)
        this.authorityService.authenticated = true;
        this.router.navigate(["home"]);
        location.reload();

      }else{
        console.log("login failed")
        sessionStorage.setItem("email", "no_user")
        this.errorMsg = "Login failed !!"
        this.authorityService.authenticated = false;
      }
    })

  }

}
