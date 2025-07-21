# Catalogo de Productos Vue

Este es un proyecto de catálogo de productos desarrollado con Vue 3 y Vite. La aplicación permite visualizar una lista de productos cargados desde un archivo JSON.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de directorios:

```
catalogo-productos-vue
├── src
│   ├── assets          # Recursos estáticos como imágenes y estilos
│   ├── components      # Componentes de Vue
│   │   └── ProductList.vue  # Componente que muestra la lista de productos
│   ├── data           # Datos de la aplicación
│   │   └── productos.json  # Archivo JSON con los datos de los productos
│   ├── App.vue        # Componente raíz de la aplicación
│   ├── main.js        # Punto de entrada de la aplicación
│   └── router
│       └── index.js   # Configuración de rutas (actualmente no se utilizan)
├── public
│   └── favicon.ico     # Ícono de la aplicación
├── package.json        # Configuración del proyecto para npm
├── vite.config.js      # Configuración de Vite
└── README.md           # Documentación del proyecto
```

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando en la raíz del proyecto:

```
npm install
```

## Ejecución

Para iniciar la aplicación en modo de desarrollo, utiliza el siguiente comando:

```
npm run dev
```

Esto abrirá la aplicación en tu navegador en `http://localhost:3000`.

## Construcción

Para crear una versión de producción de la aplicación, ejecuta:

```
npm run build
```

Los archivos generados se encontrarán en el directorio `dist`.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto, siéntete libre de hacer un fork y enviar un pull request.