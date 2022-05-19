import { Component, OnInit } from '@angular/core';
import { DateService } from '../date.service';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  title = "Welcome to the Angular Pipe demo";

  today:any;

  constructor(private dateService:DateService) { }

  ngOnInit(): void {
    this.today = this.dateService.showTodayDate()
  }

}
