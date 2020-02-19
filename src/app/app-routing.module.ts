import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './Components/dashboard/dashboard.component';
import {AutorListComponent} from './Components/Autor/autor-list/autor-list.component';
import {PublicacionesListComponent} from './Components/Publicaciones/publicaciones-list/publicaciones-list.component';
import {UsuariosListComponent} from './Components/Usuarios/usuarios-list/usuarios-list.component';
import {AgregarAutorComponent} from './Components/Autor/agregar-autor/agregar-autor.component';
import {EditarAutorComponent} from './Components/Autor/editar-autor/editar-autor.component';
import { UsuariosAgregarComponent } from './Components/Usuarios/usuarios-agregar/usuarios-agregar.component';
import { UsuariosEditarComponent } from './Components/Usuarios/usuarios-editar/usuarios-editar.component';
import { PublicacionesAgregarComponent } from './Components/Publicaciones/publicaciones-agregar/publicaciones-agregar.component';
import { PublicacionesEditarComponent } from './Components/Publicaciones/publicaciones-editar/publicaciones-editar.component';
import { PublicacionesBorrarComponent } from './Components/Publicaciones/publicaciones-borrar/publicaciones-borrar.component';
import { UsuariosBorrarComponent } from './Components/Usuarios/usuarios-borrar/usuarios-borrar.component';
import { UsuariosLoginComponent } from './Components/Usuarios/usuarios-login/usuarios-login.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'autores', component: AutorListComponent},
  {path: 'autores/agregar', component: AgregarAutorComponent},
  {path: 'autores/editar/:id', component: EditarAutorComponent},
  {path: 'publicaciones', component: PublicacionesListComponent},
  {path: 'usuarios/usuarios-agregar', component: UsuariosAgregarComponent},
  {path: 'usuarios/usuarios-editar', component: UsuariosEditarComponent},
  {path: 'usuarios/usuarios-borrar', component: UsuariosBorrarComponent},
  {path: 'usuarios/usuarios-login', component: UsuariosLoginComponent},
  {path: 'publicaciones/publicaciones-agregar', component: PublicacionesAgregarComponent},
  {path: 'publicaciones/publicaciones-editar', component: PublicacionesEditarComponent},
  {path: 'publicaciones/publicaciones-list', component: PublicacionesListComponent},
  {path: 'publicaciones/publicaciones-borrar', component: PublicacionesBorrarComponent},
  {path: 'usuarios', component: UsuariosListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
