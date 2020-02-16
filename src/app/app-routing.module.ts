import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './Components/dashboard/dashboard.component';
import {AutorListComponent} from './Components/Autor/autor-list/autor-list.component';
import {PublicacionesListComponent} from './Components/Publicaciones/publicaciones-list/publicaciones-list.component';
import {UsuariosListComponent} from './Components/Usuarios/usuarios-list/usuarios-list.component';
import {AgregarAutorComponent} from './Components/Autor/agregar-autor/agregar-autor.component';
import {EditarAutorComponent} from './Components/Autor/editar-autor/editar-autor.component';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'autores', component: AutorListComponent},
  {path: 'autores/agregar', component: AgregarAutorComponent},
  {path: 'autores/editar/:id', component: EditarAutorComponent},
  {path: 'publicaciones', component: PublicacionesListComponent},
  {path: 'usuarios', component: UsuariosListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
