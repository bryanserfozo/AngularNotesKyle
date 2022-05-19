import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  myObservable = of(1,2,3);

  myObserver = {
    next: (x:any) => console.log('Observer got the next value ' + x),
    error: (err:any) => console.log('Observer got an error: ' + err),
    complete: () => console.log('Observer got a completed notification')
  }

  constructor() { }

  ngOnInit(): void {
    this.myObservable.subscribe(this.myObserver);
  }

}
