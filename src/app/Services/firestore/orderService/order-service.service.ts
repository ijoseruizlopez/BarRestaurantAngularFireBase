import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(
    private firestore: AngularFirestore
  ) { }

  public CreateMenu(data: { Estado: Object, Fecha:Date, Mesa:number, Producto:Object, Tipo:Object}) {
    return this.firestore.collection('Pedido').add(data);
  }

  public GetMenu(id: string) {
    return this.firestore.collection('Pedido').doc(id).snapshotChanges();;
  }

  public GetMenues() {
    return this.firestore.collection('Pedido').snapshotChanges();
  }

  public UpdateMenu(id: string, data: any) {
    return this.firestore.collection('Pedido').doc(id).set(data);
  }

  public deleteMenu(id: string) {
    return this.firestore.collection('Pedido').doc(id).delete();
  }
}