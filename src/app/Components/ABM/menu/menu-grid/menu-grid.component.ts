import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-grid',
  templateUrl: './menu-grid.component.html',
  styleUrls: ['./menu-grid.component.css']
})
export class MenuGridComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'Accion'];
  public dataSource =[];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  newMenu() {
    this.router.navigate(['/Menu/ABM/A/-1']);
  }
}
