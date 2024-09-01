# Enseñanzas

- Crea una lista de objetos con los titulos y los links de referencia para crear los elementos <a>

- Usa un elemento span para colocar el nombre del botón del menu, creo que es para accesibilidad, para las personas que usan lectores de pantalla por limitaciones visuales

```jsx
<button type="button">
  <span className="sr-only">Open Main Menu</span>
  <i class="menu-bar"></i>
</button>
```

- 💢 crea 2 veces el menu, uno para el diseño normal y otro para el mobile en lugar de adaptar el diseño existente con media queries.

- 💢 usa muchas clases de tailwinds que considero son innecesarias
