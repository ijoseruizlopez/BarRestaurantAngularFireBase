import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(
    private firestore: AngularFirestore
  ) { }

  public CreateMenu(data: { Descripcion: string, Nombre:string})  {
    return this.firestore.collection('Menu').add(data);
  }

  public GetMenu(id: string) {
    return this.firestore.collection('Menu').doc(id).snapshotChanges();;
  }

  public GetMenues() {
    return this.firestore.collection('Menu').snapshotChanges();
  }

  public UpdateMenu(id: string, data: any) {
    return this.firestore.collection('Menu').doc(id).set(data);
  }

  public deleteMenu(id: string) {
    return this.firestore.collection('Menu').doc(id).delete();
  }
}