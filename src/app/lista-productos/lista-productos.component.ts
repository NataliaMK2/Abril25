import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../_servicios/productos.service';
import { Producto } from '../_modelo/Producto';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent implements OnInit {
productos : Producto[]=[];
constructor(private servicio : ProductosService){}

ngOnInit(): void {
  this.servicio.obtenerTodos().subscribe(data =>this.productos=data);
}
}
