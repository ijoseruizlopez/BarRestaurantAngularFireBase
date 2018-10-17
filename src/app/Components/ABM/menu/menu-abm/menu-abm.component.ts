import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FirestoreMenuService } from 'src/app/Services/firestore/menuService/menu-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../product/Interfaces/Product';
import { Menu } from '../Interfaces/Menu';

@Component({
  selector: 'app-menu-abm',
  templateUrl: './menu-abm.component.html',
  styleUrls: ['./menu-abm.component.css']
})
export class MenuABMComponent implements OnInit {

  action:string;
  editable: boolean = true;
  submitted:boolean = false;
  menu:Menu;
  id:string;
  actionComplete:boolean=false;

  //Formulario con la estructura del Json que necesitamos
  public menuForm =  new FormGroup({
    Id: new FormControl(-1),
    Nombre: new FormControl(''),
    Descripcion: new FormControl(''),
  });

  constructor(private router: ActivatedRoute, 
    private route: Router, 
    public firestoreService: FirestoreMenuService,) { }

  ngOnInit() {

    this.router.params.subscribe( params => {
      this.id=params.Id;
      this.action=params.Action;}
      );

      if(this.action=="C" || this.action=="B")
      {
        this.editable=false;
      }
       
      if(this.action!="A")
        this.getProduct(this.id);  
  }


  getProduct(id){
    let editSubscribe = this.firestoreService.GetMenu(id).subscribe((menuData) => {
      var data = <Menu>menuData.payload.data();
      this.menuForm.setValue({
        Id : id,
        Nombre : data.Nombre,
        Descripcion : data.Descripcion
      });
      editSubscribe.unsubscribe();
    });
  }

  save()
  {
    this.submitted = true;
    if(this.menuForm.valid) {
      console.log(this.menuForm.value);
      this.menu = this.menuForm.value;

      
      if(this.action=="M")
      {
        this.firestoreService.UpdateMenu(this.id, this.menu).then(() =>{         
          this.actionComplete=true;
          this.editable=false; });
      }

      else{
        this.firestoreService.CreateMenu(this.menu).then(() =>{  
          this.actionComplete=true;
          this.editable=false;
          });
      }

      }
  }

  delete()
  {
    this.firestoreService.deleteMenu(this.id).then(() => {
      this.actionComplete=true;
      this.editable=false;
    });
  }

  cancel()
  {
    this.route.navigate(['/Menu/List']);
  }
}
