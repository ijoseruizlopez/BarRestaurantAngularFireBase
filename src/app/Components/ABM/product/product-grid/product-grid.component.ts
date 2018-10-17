import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreProductService } from 'src/app/Services/firestore/productService/product-service.service';

@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  displayedColumns: string[] = ['Icon', 'Carta','Clasificacion','Descripcion', 'Accion'];
  public dataSource =[];

  
  constructor(private router: Router, private firestoreService: FirestoreProductService) { }

  ngOnInit() {
    this.getServices();
  }


  newProduct(){
    this.router.navigate(['/Product/ABM/A/-1']);
  } 

  getServices(){

    this.firestoreService.GetProducts().subscribe((productsSnapshot) => {
     
      this.dataSource = [];
      productsSnapshot.forEach((productData: any) => {
        var data = productData.payload.doc.data();
        this.dataSource.push({
          Id: productData.payload.doc.id,
          Carta: data.Carta==null ?  "": data.Carta,
          Clasificacion: data.Clasificacion==null ? "": data.Clasificacion,
          Descripcion: data.Descripcion
        });
      })
    });
  }
}
