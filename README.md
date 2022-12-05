# Proyecto para el curso REACT.JS en CoderHouse, comisión 40275.

## Pasos para ejecutar el proyecto

- Descargar/clonar este repositorio.

- Asegurarse de contar con [NodeJs](https://nodejs.org/en/) en la PC.

- Desde la carpeta del proyecto correr el siguiente comando en la terminal:

```sh
npm install
```
- Cargar o crear las variables de entorno para poder utilizar el proyecto.

- El proyecto ya está listo para compilarse y ejectuarse con el siguiente comando:

```sh
npm start
```

## E-Commerce para Odin´s Dog Shop

Simulador de E-Commerce de productos para perros para Odin´s Dog Shop.

La aplicación se basa en una tienda online de productos para perros, donde se detalla cada producto y se cuenta con un filtrado por categorías usando la información cargada en Firebase, la cual contiene los productos y registra las ordenes de compra.

Las acciones que se pueden realizar en el simulador son las siguientes:

- Filtrado de productos según su categoría.  

- Interactuar con cada producto en el origen y desplegar su card propia con los detalles del mismo. 

- La card de detalle cuenta con un contador que sirve para sumar la cantidad deseada de productos al carrito.

- Al cargar la cantidad deseada de productos al carrito aparece el botón para ir al mismo.

- Dentro del carrito nos encontramos con todos los productos cargados, cantidad de cada artículo y precio de cada uno, así como también el total.

- Están las opciones de sacar del carrito algún producto puntual o todos, y también la opción de avanzar con la compra.

- En el formulario para realizar la orden se deben cargar nombre, email y teléfono para ser contactado una vez realizada la misma.

- Al realizar la orden, un alert nos indica el código de la misma y nos redirecciona al home.

## Instalaciones mediante npm.

- Framework: React (Create-React-App)
- Libraries:
  > React-router-dom  

## Funcionamiento de la App

Las categorías de los productos están linkeadas en el navbar para realizar el filtrado de los mismos según su categoría usando las rutas "/category/:categoryId". 

En el componente ItemListContainer están guardados las cards de los productos, creadas de forma dinámica atreves de los componentes ItemList e Item, haciendo click en la card nos va a dirigir hacia la ruta "/detail/:productId" donde están los detalles del producto seleccionado, y el mismo cuenta con un componente llamado Counter, el cual se va a ocupar de dar la opción interactiva al usuario para sumar la cantidad que desee de producto al carrito de compra, mediante los botones de "-", "+" y "Agregar al Carrito". Una vez agregados los productos el contador va a ser reemplazado por un botón de "Volver al Inicio" que nos redirecciona al home para seguir comprando, y otro botón de "Ir al Carrito", el cuál nos redirecciona al componente CartContainer, donde vamos a encontrar unas versiones simplificadas de las cards de los productos cargados. En este componente nos encontramos con los precios de cada artículo y el total del carrito, también con las opciones de eliminar el producto que no se vaya a comprar o eliminar todo el carrito, dejándolo vacío. También se puede avanzar con la compra, lo cual nos lleva al componente Formulario, el que se va a ocupar de recibir la información del comprador, que, al generar la orden, se le imprime en un alert el código de la misma y se lo redirecciona al home.


## Deployed App

[Deploy](https://odins-dog-shop.vercel.app/).