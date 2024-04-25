import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaProductosComponent } from "./lista-productos/lista-productos.component";
import { AltaProductosComponent } from "./alta-baja.productos/alta-productos.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ListaProductosComponent, AltaProductosComponent]
})
export class AppComponent {
  title = 'Abril25';
}
