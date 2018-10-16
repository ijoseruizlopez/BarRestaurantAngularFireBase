import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-grid',
  templateUrl: './table-grid.component.html',
  styleUrls: ['./table-grid.component.css']
})
export class TableGridComponent implements OnInit {



    
  displayedColumns: string[] = ['Id', 'Accion'];
  public dataSource =[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  
  newTable(){
    this.router.navigate(['/Table/ABM/A/-1']);
  } 

}
