import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { entorno } from '../_entorno/entorno';
import { Producto } from "../_modelo/Producto";

@Injectable({
    providedIn: 'root'
})
export class ProductosService {
    private url: string = `${entorno.HOST}/productos`;

    constructor(private http: HttpClient) { }

    obtenerTodos(): Observable<Producto[]> {
        return this.http.get<Producto[]>(this.url);
    }

    darAltaProducto(producto: Producto): Observable<Producto> {
        return this.http.post<Producto>(this.url, producto);
    }

    eliminarProducto(id: number): Observable<void> {
        const urlEliminar = `${this.url}/${id}`;
        return this.http.delete<void>(urlEliminar);
    }
}
