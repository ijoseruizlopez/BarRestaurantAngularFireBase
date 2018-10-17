import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreProductService } from 'src/app/Services/firestore/productService/product-service.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-product-grid',
  templateUrl: './product-grid.component.html',
  styleUrls: ['./product-grid.component.css']
})
export class ProductGridComponent implements OnInit {

  displayedColumns: string[] = ['Icon', 'Carta','Clasificacion','Descripcion', 'Accion'];
  public dataSource =new MatTableDataSource([]);
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private router: Router, private firestoreService: FirestoreProductService) { }

  ngOnInit() {
    this.getServices();
    this.dataSource.sort=this.sort;
  
  }


  newProduct(){
    this.router.navigate(['/Product/ABM/A/-1']);
  } 

  getServices(){

    this.firestoreService.GetProducts().subscribe((productsSnapshot) => {
     
      var dataSourceAux = [];
      productsSnapshot.forEach((productData: any) => {
        var data = productData.payload.doc.data();
        dataSourceAux.push({
          Id: productData.payload.doc.id,
          Carta: data.Carta==null ?  "": data.Carta,
          Clasificacion: data.Clasificacion==null ? "": data.Clasificacion,
          Descripcion: data.Descripcion
        });

      })
      this.dataSource = new MatTableDataSource(dataSourceAux);
      
    });
  }
}
