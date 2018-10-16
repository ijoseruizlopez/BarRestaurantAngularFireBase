import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table-abm',
  templateUrl: './table-abm.component.html',
  styleUrls: ['./table-abm.component.css']
})
export class TableAbmComponent implements OnInit {

  action:string;
  editable: boolean = true;
  actionComplete:boolean=false;

  //Formulario con la estructura del Json que necesitamos
  public menuForm =  new FormGroup({
    Id: new FormControl(-1),
    Nombre: new FormControl(''),
  });
  


  constructor(private router: Router) { }

  ngOnInit() {
  }

}
