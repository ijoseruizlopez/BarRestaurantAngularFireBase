import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  displayedColumns: string[] = ['Id', 'Accion'];
  public dataSource =[];

  
  constructor(private router: Router) { }

  ngOnInit() {
  }


  newProduct(){
    this.router.navigate(['/Product/ABM/A/-1']);
  } 
}
