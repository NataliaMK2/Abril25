import { Component } from '@angular/core';
import { ProductosService } from '../_servicios/productos.service';
import { Producto } from '../_modelo/Producto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alta-productos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './alta-productos.component.html',
  styleUrl: './alta-productos.component.css'
})
export class AltaProductosComponent {

  producto: Producto = {
    idProducto: 0,
    nombreProducto: '',
    precioUnitario: 0,
    unidadesEnStock: 0,
    categoria: 0
  };

  constructor(private servicio: ProductosService) {}

  darAlta(): void {
    this.servicio.darAltaProducto(this.producto).subscribe(() => {
      this.limpiarFormulario();
    });
  }

  limpiarFormulario(): void {
    this.producto = {
      idProducto: 0,
      nombreProducto: '',
      precioUnitario: 0,
      unidadesEnStock: 0,
      categoria: 0
    };
  }

  eliminarProducto(): void {
    if (this.producto.idProducto !== 0) {
      if (confirm('¿Está seguro de eliminar este producto?')) {
        this.servicio.eliminarProducto(this.producto.idProducto).subscribe(() => {
          console.log('Producto eliminado'); 
          this.limpiarFormulario();
        });
      }
    } else {
      console.log('No se puede eliminar un producto sin un ID válido.');
    }
  }
}
