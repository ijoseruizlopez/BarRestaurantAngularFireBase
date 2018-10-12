import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kitchen-board',
  templateUrl: './kitchen-board.component.html',
  styleUrls: ['./kitchen-board.component.css']
})
export class KitchenBoardComponent implements OnInit {

  displayedColumns: string[] = ['Id'];
  public dataSource =[];

  constructor() { }

  ngOnInit() {
  }

}
