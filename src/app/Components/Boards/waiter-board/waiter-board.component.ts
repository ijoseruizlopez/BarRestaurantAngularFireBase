import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-waiter-board',
  templateUrl: './waiter-board.component.html',
  styleUrls: ['./waiter-board.component.css']
})
export class WaiterBoardComponent implements OnInit {

  displayedColumns: string[] = ['Id'];
  public dataSource =[];

  constructor() { }

  ngOnInit() {
  }

}
