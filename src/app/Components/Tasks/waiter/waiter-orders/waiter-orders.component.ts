import { Component, OnInit } from '@angular/core';
import { FirestoreProductService } from 'src/app/Services/firestore/productService/product-service.service';
import { FirestoreMenuService } from 'src/app/Services/firestore/menuService/menu-service.service';
import { FirestoreTableService } from 'src/app/Services/firestore/tableService/table-service.service';
import { Order } from '../Interfaces/Order';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from 'src/app/Components/Common/confirmation-dialog/confirmation-dialog.component';


@Component({
  selector: 'app-waiter-orders',
  templateUrl: './waiter-orders.component.html',
  styleUrls: ['./waiter-orders.component.css']
})
export class WaiterOrdersComponent implements OnInit {
  panelOpenState = false;
  idCarta: number = 0;
  idClasificacion: number = 0;
  idMesa: number = 0;
  descripcionProducto: String = "";

  public tables=[];
  public classifications = [];
  public menues = [];
  public description: string;

  public products = [];
  public productsSearch = [];
  public clasificationSearch = [];

  countOrder:number=0;
  descripcionPedido:string="";

  order:Order;

  constructor(public firestoreProductService: FirestoreProductService,
    public firestoreMenuService: FirestoreMenuService,
    public firestoreTableService: FirestoreTableService,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.getClasifications();
    this.getMenues();
    this.getProducts();
    this.getTables();
  }

  getClasifications() {
    this.firestoreProductService.GetClasificationsProducts().subscribe((regionSnapshot) => {
      this.classifications = [];
      regionSnapshot.forEach((regionData: any) => {
        this.classifications.push({
          Id: regionData.payload.doc.id,
          Descripcion: regionData.payload.doc.data().Descripcion
        });
      })
    });
  }

  getMenues() {
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

  getProducts() {
    this.firestoreProductService.GetProducts().subscribe((regionSnapshot) => {
      this.products = [];
      regionSnapshot.forEach((regionData: any) => {
        this.products.push({
          Id: regionData.payload.doc.id,
          Nombre: regionData.payload.doc.data().Nombre,
          Precio: regionData.payload.doc.data().Precio,
          Descripcion: regionData.payload.doc.data().Descripcion,
          Clasificacion: regionData.payload.doc.data().Clasificacion,
          Carta: regionData.payload.doc.data().Carta
        });
      })
    });
  }

  getTables() {
    this.firestoreTableService.getTables().subscribe((regionSnapshot) => {
      this.tables = [];
      regionSnapshot.forEach((regionData: any) => {
        this.tables.push({
          Id: regionData.payload.doc.id,
          Numero: regionData.payload.doc.data().Numero,
        });
      })
    });
  }

  getSearch() {
    this.productsSearch = [];

    this.products.forEach(product => {
      if (this.idCarta == 0 && this.idClasificacion == 0 && this.descripcionProducto == "") {
        this.productsSearch = this.products;
      } else {
        if (this.idCarta != 0 && this.idClasificacion != 0 && this.descripcionProducto != "") {
          if (product.Nombre.toUpperCase().indexOf(this.descripcionProducto.toUpperCase())!= -1 &&
            product.Clasificacion.Id == this.idClasificacion &&
            product.Carta.Id == this.idCarta) {
            this.productsSearch.push(product);
          }
        }
        else {
          if (this.idCarta == 0 && this.idClasificacion == 0 && this.descripcionProducto != "") {
            if (product.Nombre.toUpperCase().indexOf(this.descripcionProducto.toUpperCase())!= -1) {
                this.productsSearch.push(product);
            }
          }
          else {
            if (this.idCarta == 0 && this.idClasificacion != 0 && this.descripcionProducto != "") {
              if (product.Nombre.toUpperCase().indexOf(this.descripcionProducto.toUpperCase())!= -1 && product.Clasificacion.Id == this.idClasificacion) {
                this.productsSearch.push(product);
              }
            }
            else {
              if (this.idCarta != 0 && this.idClasificacion == 0 && this.descripcionProducto != "") {
                if (product.Carta.Id == this.idCarta &&
                  product.Nombre.toUpperCase().indexOf(this.descripcionProducto.toUpperCase())!= -1) {
                  this.productsSearch.push(product);
                }
              }
              else {
                if (this.idCarta == 0 && this.idClasificacion != 0 && this.descripcionProducto == "") {
                  if (product.Clasificacion.Id == this.idClasificacion) {
                    this.productsSearch.push(product);
                  }
                }
                else {
                  if (this.idCarta != 0 && this.idClasificacion != 0 && this.descripcionProducto == "") {
                    if (product.Clasificacion.Id == this.idClasificacion &&
                      product.Carta.Id == this.idCarta) {
                      this.productsSearch.push(product);
                    }
                  }
                  else {
                    if (this.idCarta == 0 && this.idClasificacion != 0 && this.descripcionProducto != "") {
                      if (product.Clasificacion.Id == this.idClasificacion &&
                        product.Carta.Id == this.idCarta) {
                        this.productsSearch.push(product);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    });

    var groups = this.productsSearch.reduce(function(obj,item){
      obj[item.Clasificacion.Id] = obj[item.Clasificacion.Id] || [];
      obj[item.Clasificacion.Id].push(item);
      return obj;
    }, {});
    this.clasificationSearch = Object.keys(groups).map(function(key){
        return {id: key, group: groups[key]};
    });

  }

  removeProduct(idProducto:number){
    
  }

  
  addProduct(idProducto:number, descripcionProducto:string, cantidadProducto:number){

    this.products.forEach(product => {
      if(product.id==idProducto){
        this.order.productos.push(
          {
            id:-1,
            producto:product,
            descripcion: descripcionProducto,
            cantidad:cantidadProducto,
            precio:product.Precio*cantidadProducto
          }
        )
      }

    });

  }

  confirmar(){

    const dialogRef = this.dialog.open(ConfirmationDialogComponent);
    dialogRef.componentInstance.title="Esta a punto de realizar una orden";
    dialogRef.componentInstance.description="La descripcion del pedido es la siguiente";
    dialogRef.afterClosed().subscribe(result => {
      if(result){

      }
    })
  }
  
}
