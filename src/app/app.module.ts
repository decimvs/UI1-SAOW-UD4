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
import { UsuariosAgregarComponent } from './Components/Usuarios/usuarios-agregar/usuarios-agregar.component';
import { UsuariosEditarComponent } from './Components/Usuarios/usuarios-editar/usuarios-editar.component';
import { UsuariosBorrarComponent } from './Components/Usuarios/usuarios-borrar/usuarios-borrar.component';
import { PublicacionesAgregarComponent } from './Components/Publicaciones/publicaciones-agregar/publicaciones-agregar.component';
import { PublicacionesEditarComponent } from './Components/Publicaciones/publicaciones-editar/publicaciones-editar.component';
import { PublicacionesBorrarComponent } from './Components/Publicaciones/publicaciones-borrar/publicaciones-borrar.component';
import { UsuariosLoginComponent } from './Components/Usuarios/usuarios-login/usuarios-login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AutorListComponent,
    PublicacionesListComponent,
    UsuariosListComponent,
    AgregarAutorComponent,
    EditarAutorComponent,
    UsuariosAgregarComponent,
    UsuariosEditarComponent,
    UsuariosBorrarComponent,
    PublicacionesAgregarComponent,
    PublicacionesEditarComponent,
    PublicacionesBorrarComponent,
    UsuariosLoginComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
