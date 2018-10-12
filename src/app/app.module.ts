import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
//Modulos para angular material
import {MaterialModule} from './material'; //Creamos nuestro propio modulo para no sobrecargar el app.Module, ahi cargamos los componentes que vamos a suar
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Componentes generales
import { AppComponent } from './app.component';

//Modulos para ruteo
import { RouterModule, Route } from '@angular/router';

//Importamos el Modulo para hacer el bindeo con formularios
import { FormsModule, FormControlDirective, FormGroupDirective, ReactiveFormsModule} from '@angular/forms'

//Modulos y provedeodres para Fire Base
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestore } from 'angularfire2/firestore';
import { MenuABMComponent } from './Components/ABM/menu/menu-abm/menu-abm.component';
import { MenuGridComponent } from './Components/ABM/menu/menu-grid/menu-grid.component';
import { ProductABMComponent } from './Components/ABM/product/product-abm/product-abm.component';
import { ProductGridComponent } from './Components/ABM/product/product-grid/product-grid.component';
import { HeaderComponent } from './Components/Common/header/header.component';
import { MenuComponent } from './Components/Common/menu/menu.component';
import { ActionMenuComponent } from './Components/ABM/action-menu/action-menu.component';
import { CarouselComponent } from './Components/Common/carousel/carousel.component';
import { PayBoardComponent } from './Components/Boards/pay-board/pay-board.component';
import { WaiterBoardComponent } from './Components/Boards/waiter-board/waiter-board.component';
import { KitchenBoardComponent } from './Components/Boards/kitchen-board/kitchen-board.component';
import { WaiterOrdersComponent } from './Components/Tasks/waiter/waiter-orders/waiter-orders.component';

import { WaiterOrdersToCollectComponent } from './Components/Tasks/waiter/waiter-orders-to-collect/waiter-orders-to-collect.component';
import { WaiterMainComponent } from './Components/Tasks/waiter/waiter-main/waiter-main.component';

const routes: Route[]=[
  {path:'Menu/ABM/:Action/:Id' , component:MenuABMComponent},
  {path:'Product/ABM/:Action/:Id', component: ProductABMComponent},
  {path:'Menu/List' , component:MenuGridComponent},
  {path:'Products/List', component:ProductGridComponent},
  {path:'Board/Kitchen' , component:KitchenBoardComponent},
  {path:'Board/Waiter' , component:WaiterMainComponent},
  {path:'Board/Pay' , component:PayBoardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MenuABMComponent,
    MenuGridComponent,
    ProductABMComponent,
    ProductGridComponent,
    HeaderComponent,
    MenuComponent,
    ActionMenuComponent,
    CarouselComponent,
    PayBoardComponent,
    WaiterBoardComponent,
    KitchenBoardComponent,
    WaiterOrdersComponent,
    WaiterOrdersToCollectComponent, 
    WaiterMainComponent 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes), //Importamos las rutas navegables
    AngularFireModule.initializeApp(environment.firebase)
  ],
  exports : [ReactiveFormsModule],
  providers: [AngularFirestore, FormControlDirective, FormGroupDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
