import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirestoreTableService } from 'src/app/Services/firestore/tableService/table-service.service';
import { Table } from '../interfaces/table';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from 'src/app/Components/Common/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-table-abm',
  templateUrl: './table-abm.component.html',
  styleUrls: ['./table-abm.component.css']
})
export class TableAbmComponent implements OnInit {

  action:string;
  editable: boolean = true;
  actionComplete:boolean=false;
  submitted:boolean = false;
  menu:Table;
  id:string;

  //Formulario con la estructura del Json que necesitamos
  public menuForm =  new FormGroup({
    Id: new FormControl(-1),
    Numero: new FormControl('', [Validators.required, Validators.min(1), Validators.max(200)]),
  });
  


  constructor(private router: ActivatedRoute, 
              private route: Router, 
              public firestoreService: FirestoreTableService,
              public dialog: MatDialog) { }

  ngOnInit() {

    console.log(this.menuForm);
    this.router.params.subscribe( params => {
      this.id=params.Id;
      this.action=params.Action;}
      );

      if(this.action=="C" || this.action=="B")
      {
        this.editable=false;
      }
       
      if(this.action!="A")
        this.getTable(this.id);  
  }

  getTable(id){
    let editSubscribe = this.firestoreService.getTable(id).subscribe((tableData) => {
      var data = <Table>tableData.payload.data();
      console.log(data);
      this.menuForm.setValue({
        Id : id,
        Numero : data.Numero
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
        this.firestoreService.updateTable(this.id, this.menu).then(() =>{         
          this.actionComplete=true;
          this.editable=false; });
      }

      else{
        this.firestoreService.createTable(this.menu).then(() =>{  
          this.actionComplete=true;
          this.editable=false;
          });
      }

      }
  }

  delete()
  {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.firestoreService.deleteTable(this.id).then(() => {
          this.actionComplete=true;
          this.editable=false;
        });
      }
    })
  }

  cancel()
  {
    this.route.navigate(['/Table/List']);
  }

  get f() {return this.menuForm.controls; }
}
