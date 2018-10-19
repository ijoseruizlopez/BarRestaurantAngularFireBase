import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirestoreMenuService } from 'src/app/Services/firestore/menuService/menu-service.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Menu } from '../Interfaces/Menu';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from 'src/app/Components/Common/confirmation-dialog/confirmation-dialog.component';


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
    Nombre: new FormControl('', [Validators.required]),
    Descripcion: new FormControl('',[Validators.required]),
  });

  constructor(private router: ActivatedRoute, 
    private route: Router, 
    public firestoreService: FirestoreMenuService, 
    public dialog: MatDialog) { }

  get f() {return this.menuForm.controls; }

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
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);
    dialogRef.componentInstance.title="Esta a punto de realizar una Eliminacion";
    dialogRef.componentInstance.description="Tenga en cuenta que la eliminacion es permanente";
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.firestoreService.deleteMenu(this.id).then(() => {
          this.actionComplete=true;
          this.editable=false;
        });
      }
    })
  }

  cancel()
  {
    this.route.navigate(['/Menu/List']);
  }
}
