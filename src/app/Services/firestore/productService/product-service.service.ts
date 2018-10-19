import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreProductService {
  constructor(
    private firestore: AngularFirestore
  ) { }

  public CreateProduct(data: { Carta: Object, Clasificacion:Object, Descripcion:string, Nombre:string, Tipo:Object, Precio:number}) {
    return this.firestore.collection('Producto').add(data);
  }

  public GetProduct(id: string) {
    return this.firestore.collection('Producto').doc(id).snapshotChanges();;
  }

  public GetProducts() {
    return this.firestore.collection('Producto').snapshotChanges();
  }

  public UpdateProduct(id: string, data: any) {
    return this.firestore.collection('Producto').doc(id).set(data);
  }

  public deleteProduct(id: string) {
    return this.firestore.collection('Producto').doc(id).delete();
  }

  public GetClasificationsProducts() {
    return this.firestore.collection('Producto.Clasificacion').snapshotChanges();
  }
  
  public GetTypeProducts() {
    return this.firestore.collection('Producto.Tipo').snapshotChanges();
  }
}