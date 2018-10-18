import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../Interfaces/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { FirestoreProductService } from 'src/app/Services/firestore/productService/product-service.service';
import { FirestoreMenuService } from 'src/app/Services/firestore/menuService/menu-service.service';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from 'src/app/Components/Common/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-product-abm',
  templateUrl: './product-abm.component.html',
  styleUrls: ['./product-abm.component.css']
})
export class ProductABMComponent implements OnInit {

  action:string;
  editable: boolean = true;
  submitted:boolean = false;
  product:Product;
  id:string;
  actionComplete:boolean=false;

  public classifications=[];
  public types=[];
  public menues=[];


  public productForm =  new FormGroup({
    Id: new FormControl(-1),
    Nombre: new FormControl('',[Validators.required]),
    Descripcion: new FormControl(''),
    Carta:new FormControl({Id:-1, Descripcion:""}, [Validators.required]),
    Clasificacion:new FormControl({Id:-1, Descripcion:""}, [Validators.required]),
    Tipo:new FormControl({Id:-1, Descripcion:""}, [Validators.required])
  });
  

  constructor(private router: ActivatedRoute, 
    private route: Router, 
    public firestoreService: FirestoreProductService,
    public firestoreMenuService: FirestoreMenuService,
    public dialog: MatDialog) { }

  get f() {return this.productForm.controls; }

  ngOnInit() {

    this.getClasifications();
    this.getMenues();
    this.getTypes();
    
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

  getClasifications(){
    this.firestoreService.GetClasificationsProducts().subscribe((regionSnapshot) => { 
      this.classifications = [];
        regionSnapshot.forEach((regionData: any) => {
          this.classifications.push({ 
            Id: regionData.payload.doc.id,
            Descripcion: regionData.payload.doc.data().Descripcion
          });
        })
      });
  }

  getMenues(){
    this.firestoreMenuService.GetMenues().subscribe((regionSnapshot) => { 
      this.menues = [];
        regionSnapshot.forEach((regionData: any) => {
          this.menues.push({ 
            Id: regionData.payload.doc.id,
            Descripcion: regionData.payload.doc.data().Descripcion,
            Nombre: regionData.payload.doc.data().Nombre
          });
        })
      });
  }

  getTypes()
  {
    this.firestoreService.GetTypeProducts().subscribe((typesSnapshot) => { 
      this.types = [];
      typesSnapshot.forEach((typeData: any) => {
        
          this.types.push({ 
            Id: typeData.payload.doc.id,
            Descripcion: typeData.payload.doc.data().Descripcion
          });
          console.log(this.types);
        })
      });
  }

  getProduct(id){
    let editSubscribe = this.firestoreService.GetProduct(id).subscribe((tableData) => {
      var data = <Product>tableData.payload.data();
      this.productForm.setValue({
        Id : id,
        Nombre : data.Nombre,
        Descripcion : data.Descripcion,
        Carta : data.Carta==null?  {Id:-1, Descripcion:""}: data.Carta,
        Clasificacion : data.Clasificacion==null?  {Id:-1, Descripcion:""}: data.Clasificacion,
        Tipo : data.Tipo==null?  {Id:-1, Descripcion:""}: data.Tipo,
      });
      editSubscribe.unsubscribe();
    });
  }

  save()
  {
    this.submitted = true;
    if(this.productForm.valid) {
      console.log(this.productForm.value);
      this.product = this.productForm.value;

      
      if(this.action=="M")
      {
        this.firestoreService.UpdateProduct(this.id, this.product).then(() =>{         
          this.actionComplete=true;
          this.editable=false; });
      }

      else{
        this.firestoreService.CreateProduct(this.product).then(() =>{  
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
          this.firestoreService.deleteProduct(this.id).then(() => {
          this.actionComplete=true;
          this.editable=false;
        });
      }
    })
  }

  cancel()
  {
    this.route.navigate(['/Products/List']);
  }

  compareObjects(o1: any, o2: any) {
    if(o1.Description == o2.Description && o1.Id == o2.Id )
    return true;
    else return false;
  }
}
