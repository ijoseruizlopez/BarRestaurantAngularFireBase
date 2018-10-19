import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pay-board',
  templateUrl: './pay-board.component.html',
  styleUrls: ['./pay-board.component.css']
})
export class PayBoardComponent implements OnInit {

  displayedColumns: string[] = ['Id'];
  public dataSource =[];

  constructor() { }

  ngOnInit() {
  }

  newMenu(){
    
  }

}
