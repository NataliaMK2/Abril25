# Abril25

Este proyecto permite gestionar productos. 
Se divide en dos partes: el back-end y el front-end.

## Funcionalidades

La aplicación tiene las siguientes funcionalidades:

- **Listado de productos**: Al acceder a http://localhost:4200/, la aplicación redirige automáticamente a la página de productos, donde se muestra un listado de todos los productos disponibles.

- **Alta y eliminación de productos**: Al acceder a http://localhost:4200/alta, se muestra un formulario que permite dar de alta y eliminar productos.

## Configuración del Back-end

Para que la aplicación funcione correctamente, es necesario añadir la siguiente configuración en el controlador del back-end:

```java
@RestController
@RequestMapping("/productos")
@CrossOrigin(origins = "http://localhost:4200")
