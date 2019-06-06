import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  constructor() { }

  private messageSource = new BehaviorSubject('default message');
  currentMessage = this.messageSource.asObservable();

  searchQuery(query:string){
    this.messageSource.next(query);
  }
}
