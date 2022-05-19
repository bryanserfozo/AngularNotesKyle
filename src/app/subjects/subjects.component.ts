import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {

    // const subject = new Subject();

    // const subject = new BehaviorSubject(0);

    //const subject = new ReplaySubject(2);

    const subject = new AsyncSubject();

    // First observer
    subject.subscribe({
    next: (data) => console.log("First observer sees " + data)
    })

    subject.next(1);
    subject.next(2222);

    // Second Observer
    subject.subscribe({
      next: (data) => console.log("Second observer sees " + data)
      })

    subject.next(34);
    subject.next(21);
    subject.complete();

  }

}
