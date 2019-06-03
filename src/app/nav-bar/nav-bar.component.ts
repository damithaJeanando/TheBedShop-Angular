import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private dataService : DataService, private home : HomeComponent) { }

  ngOnInit() {
  }

  query : string
  logout(){
    console.log("User logged out");
  }

  search(query:string){
    this.home.filter(query);
  }

}
