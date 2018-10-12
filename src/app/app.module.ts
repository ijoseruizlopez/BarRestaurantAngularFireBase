import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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

const routes: Route[]=[
  //{path:'ABM/:Action/:Id' , component:UserComponent}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    //RouterModule.forRoot(routes), //Importamos las rutas navegables
    AngularFireModule.initializeApp(environment.firebase)
  ],
  exports : [ReactiveFormsModule],
  providers: [AngularFirestore, FormControlDirective, FormGroupDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }