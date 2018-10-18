import { Component, OnInit } from '@angular/core';
import { FirestoreProductService } from 'src/app/Services/firestore/productService/product-service.service';
import { FirestoreMenuService } from 'src/app/Services/firestore/menuService/menu-service.service';

@Component({
  selector: 'app-waiter-orders',
  templateUrl: './waiter-orders.component.html',
  styleUrls: ['./waiter-orders.component.css']
})
export class WaiterOrdersComponent implements OnInit {
  panelOpenState = false;
  idCarta: number = 0;
  idClasificacion: number = 0;
  descripcionProducto: String = "";

  public classifications = [];
  public menues = [];
  public description: string;

  public products = [];
  public productsSearch = [];
  public clasificationSearch = [];

  constructor(public firestoreProductService: FirestoreProductService,
    public firestoreMenuService: FirestoreMenuService) { }

  ngOnInit() {
    this.getClasifications();
    this.getMenues();
    this.getProducts();
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
          Clasificacion: regionData.payload.doc.data().Clasificacion,
          Carta: regionData.payload.doc.data().Carta
        });
      })
    });
  }

  getSearch() {
    console.log(this.clasificationSearch);
    this.productsSearch = [];

    this.products.forEach(product => {
      if (this.idCarta == 0 && this.idClasificacion == 0 && this.descripcionProducto == "") {
        this.productsSearch = this.products;
      } else {
        if (this.idCarta != 0 && this.idClasificacion != 0 && this.descripcionProducto != "") {
          if (this.descripcionProducto.includes(product.Nombre) &&
            product.Clasificacion.Id == this.idClasificacion &&
            product.Carta.Id == this.idCarta) {
            this.productsSearch.push(product);
          }
        }
        else {
          if (this.idCarta == 0 && this.idClasificacion == 0 && this.descripcionProducto != "") {
            if (this.descripcionProducto.includes(product.Nombre)) {
              this.productsSearch.push(product);
            }
          }
          else {
            if (this.idCarta == 0 && this.idClasificacion != 0 && this.descripcionProducto != "") {
              if (this.descripcionProducto.includes(product.Nombre) && product.Clasificacion.Id == this.idClasificacion) {
                this.productsSearch.push(product);
              }
            }
            else {
              if (this.idCarta != 0 && this.idClasificacion == 0 && this.descripcionProducto != "") {
                if (product.Carta.Id == this.idCarta &&
                  this.descripcionProducto.includes(product.Nombre)) {
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
      obj[item.Clasificacion.Id].push(item.Clasificacion.Descripcion);
      return obj;
    }, {});
    this.clasificationSearch = Object.keys(groups).map(function(key){
        return {id: key, Descripcion: groups[key][0]};
    });
  }

  
}
