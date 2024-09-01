# Enseñanzas

- Cuando se colocan imagenes en la carpeta public se muestra la siguiente advertencia

```bash
Assets in public directory cannot be imported from JavaScript.
If you intend to import that asset, put the file in the src directory, and use /src/logo.svg instead of /public/logo.svg.
If you intend to use the URL of that asset, use /logo.svg?url.
Files in the public directory are served at the root path.
```

Por lo que se mejor se mueve el logo a la carpeta `src/assets/images`

- Cuando se tienen varios componentes y en ellos se comparte el mismo selector de tipo o de clase, las propiedades se sobreescriben modificando el comportamiento esperado. La solución sería sacar los estilos comunes a un archivo de estilos superior css y solo dejar los estilos específicos del componente o usar modulos de estilos CSS. TODO: investigar los modulos CSS
