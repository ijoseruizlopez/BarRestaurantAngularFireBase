import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreTableService } from 'src/app/Services/firestore/tableService/table-service.service';


@Component({
  selector: 'app-table-grid',
  templateUrl: './table-grid.component.html',
  styleUrls: ['./table-grid.component.css']
})
export class TableGridComponent implements OnInit {



    
  displayedColumns: string[] = ['Icon', 'Numero','Accion'];
  public dataSource =[];

  constructor(private router: Router, private firestoreService: FirestoreTableService) { }

  ngOnInit() {
    this.getTables();
  }

  
  newTable(){
    this.router.navigate(['/Table/ABM/A/-1']);
  } 


  getTables(){

    this.firestoreService.getTables().subscribe((usersSnapshot) => {
      
      this.dataSource = [];
      usersSnapshot.forEach((tableData: any) => {
        this.dataSource.push({
          Id: tableData.payload.doc.id,
          Numero:tableData.payload.doc.data().Numero
        });
      })

      this.dataSource.sort((a,b)=>a.Numero- b.Numero)
    });
  }
}
