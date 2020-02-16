import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AutorListComponent } from './Components/Autor/autor-list/autor-list.component';
import { PublicacionesListComponent } from './Components/Publicaciones/publicaciones-list/publicaciones-list.component';
import { UsuariosListComponent } from './Components/Usuarios/usuarios-list/usuarios-list.component';
import { AgregarAutorComponent } from './Components/Autor/agregar-autor/agregar-autor.component';
import { EditarAutorComponent } from './Components/Autor/editar-autor/editar-autor.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AutorListComponent,
    PublicacionesListComponent,
    UsuariosListComponent,
    AgregarAutorComponent,
    EditarAutorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
