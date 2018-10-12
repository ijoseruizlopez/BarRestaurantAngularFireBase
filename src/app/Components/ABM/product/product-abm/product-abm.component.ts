import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-abm',
  templateUrl: './product-abm.component.html',
  styleUrls: ['./product-abm.component.css']
})
export class ProductABMComponent implements OnInit {

  action:string;
  editable: boolean = true;
  actionComplete:boolean=false;

    //Formulario con la estructura del Json que necesitamos
    public productForm =  new FormGroup({
      Id: new FormControl(-1),
      Nombre: new FormControl(''),
    });
  

  constructor() { }

  ngOnInit() {
  }

}
