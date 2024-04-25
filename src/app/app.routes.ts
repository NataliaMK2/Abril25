import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { AltaProductosComponent } from './alta-baja.productos/alta-productos.component';
//en alta tambien está eliminar
export const routes: Routes = [
  { path: 'productos', component: ListaProductosComponent },
  { path: 'alta', component: AltaProductosComponent },
  { path: '', redirectTo: '/productos', pathMatch: 'full' }
];