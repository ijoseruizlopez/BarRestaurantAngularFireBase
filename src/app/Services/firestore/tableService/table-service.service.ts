import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreTableService {
  constructor(
    private firestore: AngularFirestore
  ) { }

  public createTable(data: { Numero: number}) {
    return this.firestore.collection('Mesa').add(data);
  }

  public getTable(id: string) {
    return this.firestore.collection('Mesa').doc(id).snapshotChanges();;
  }

  public getTables() {
    return this.firestore.collection('Mesa').snapshotChanges();
  }

  public updateTable(id: string, data: any) {
    return this.firestore.collection('Mesa').doc(id).set(data);
  }

  public deleteTable(id: string) {
    return this.firestore.collection('Mesa').doc(id).delete();
  }
}