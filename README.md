# Code Challenge Frontend Nuxt

## Build Setup

```bash
# create .env
$ cp .env-example .env

# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


## Ejercicio

1. Clone el repositorio en su entorno local

2. En pages/index.vue ordene y liste los elementos de options con el siguiente criterio:
	
	- Total de menor a mayor

Para ello use la variable computada optionsOrder

3. En components/QuoteOption.vue construya el componente partiendo del objeto value (props), debe mostrar el tipo de envío, el costo y el tiempo de entrega, para ello use los siguientes atributos:
	
	- Descripcion 
	- Total (si es 0 imprimir "Gratis")
	- PlazoEntrega

Puede usar estilos css propios para el componente, no es necesario el uso de estilos de bootstrap

4. Guarde los cambios en su repositorio