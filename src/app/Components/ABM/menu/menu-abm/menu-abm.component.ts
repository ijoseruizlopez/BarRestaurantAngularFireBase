import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-menu-abm',
  templateUrl: './menu-abm.component.html',
  styleUrls: ['./menu-abm.component.css']
})
export class MenuABMComponent implements OnInit {

  action:string;
  editable: boolean = true;
  actionComplete:boolean=false;

  //Formulario con la estructura del Json que necesitamos
  public menuForm =  new FormGroup({
    Id: new FormControl(-1),
    Nombre: new FormControl(''),
  });

  constructor() { }

  ngOnInit() {
  }

}
