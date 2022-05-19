import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  showTodayDate(){
    let ndate = new Date();
    return ndate;
  }

  constructor() { }
}
