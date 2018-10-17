import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreMenuService {
  constructor(
    private firestore: AngularFirestore
  ) { }

  public CreateMenu(data: { Descripcion: string, Nombre:string})  {
    return this.firestore.collection('Carta').add(data);
  }

  public GetMenu(id: string) {
    return this.firestore.collection('Carta').doc(id).snapshotChanges();;
  }

  public GetMenues() {
    return this.firestore.collection('Carta').snapshotChanges();
  }

  public UpdateMenu(id: string, data: any) {
    return this.firestore.collection('Carta').doc(id).set(data);
  }

  public deleteMenu(id: string) {
    return this.firestore.collection('Carta').doc(id).delete();
  }
}