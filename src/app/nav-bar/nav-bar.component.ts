import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HomeComponent } from '../home/home.component';
import { AuthorityService } from '../authority.service';
import { Router } from '@angular/router';
import { getUser } from '../Models/getUser';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  usersName:string = "";
  user : getUser=<getUser>new Object();
  admin:boolean = false;
  
  constructor(private authorityService : AuthorityService, private router : Router) { }

  ngOnInit() {
    this.usersName = this.currentUser();
  }

  query : string
  logout(){
    sessionStorage.clear();
    sessionStorage.setItem('email', 'no_user')
    this.router.navigate(['home'])
    location.reload();
    console.log("User logged out");
  }

  currentUser(){
    let name;
    if(sessionStorage.getItem("email")!="no_user"){
      name = sessionStorage.getItem("email")
      this.authorityService.getUser(name).subscribe(user => {
          this.user = user
          console.log(user.role[0])
          if(user.role[0].roleId == "aifi33"){
            this.admin = true;
          }else{
            this.admin = false;
          }
      })
    }else{
      name = "Sign In"
    }

    return name;
  }


}
