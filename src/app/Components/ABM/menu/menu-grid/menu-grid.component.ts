import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreMenuService } from 'src/app/Services/firestore/menuService/menu-service.service';

@Component({
  selector: 'app-menu-grid',
  templateUrl: './menu-grid.component.html',
  styleUrls: ['./menu-grid.component.css']
})
export class MenuGridComponent implements OnInit {

  displayedColumns: string[] = ['Icon','Nombre', 'Descripcion', 'Accion'];
  public dataSource =[];

  constructor(private router: Router, private firestoreService: FirestoreMenuService) { }

  ngOnInit() {
    this.getMenues();
  }

  newMenu() {
    this.router.navigate(['/Menu/ABM/A/-1']);
  }

  getMenues(){

    this.firestoreService.GetMenues().subscribe((menuesSnapshot) => {
     
      this.dataSource = [];
      menuesSnapshot.forEach((menuData: any) => {
        this.dataSource.push({
          Id: menuData.payload.doc.id,
          Nombre: menuData.payload.doc.data().Nombre,
          Descripcion: menuData.payload.doc.data().Descripcion
        });
      })
    });
  }
}
