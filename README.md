# Sitio web de turismo — Programación y Servicios Web (TP 2026)

Sitio ficticio para una operadora o agencia de viajes, desarrollado con **HTML** y **CSS**, y **JavaScript** mínimo (modo oscuro y scroll reveal en el blog). El enunciado del **TP 2026 (turismo)** no pide la barra de habilidades animada de ejemplos anteriores; este proyecto mantiene además el **toggle mensual / semestral / anual** de precios solo con CSS (como en el TP de gimnasio), por si lo pedís en otra instancia o querés mostrar esa técnica.

---

## Estructura del sitio

- **Header:** En todas las páginas, navegación entre secciones mediante **mega menú** desplegable (solo CSS).
- **Footer:** Newsletter, enlaces a redes sociales y **mapa embebido** (Facultad de Ingeniería, UNJu).
- **Home (`index.html`):** Hero con **video de fondo en bucle** y **texto superpuesto** con animación; bloque de **destinos destacados** (tarjetas con hover); **contador** con animación al cargar; **testimonios** en carrusel CSS.
- **Destinos (`destinos.html`):** Tarjetas informativas **sin imágenes**, **filtro por categoría** solo con CSS (Patrimonio, Naturaleza, Aventura, Playa), **galería masonry** con **lightbox**, **tabla de horarios** semanal.
- **Agencias (`agencias.html`):** Tarjetas con **efecto flip**, foto y datos del asesor en el dorso, **rating con estrellas** animado en CSS.
- **Contacto (`formulario.html`):** Formulario con validación, **spinner** al enviar y **modal** de confirmación (simulación con CSS/checkbox).
- **Precios (`precios.html`):** Tres planes de paquetes con **toggle mensual / semestral / anual** (radios + CSS `attr()`), **tooltips** en los ítems y efecto hover en las tarjetas; el borde de los planes cambia según el período seleccionado.
- **Blog (`blog.html`):** Artículos filtrables por categoría (solo CSS), **scroll reveal** con `IntersectionObserver`, sección de **comentarios** con avatares hechos en CSS.

### Archivos principales

| Archivo        | Contenido principal                          |
|----------------|-----------------------------------------------|
| `index.html`   | Inicio, hero, destacados, contador, testimonios |
| `destinos.html`| Filtro, tarjetas, galería, horarios          |
| `agencias.html`| Tarjetas flip y estrellas                    |
| `formulario.html` | Contacto                                  |
| `precios.html` | Planes y precios                             |
| `blog.html`    | Posts, filtros, comentarios                  |
| `css/styles.css` | Estilos globales, animaciones, modo oscuro |

---

## Decisiones de diseño

- **Paleta cálida** (naranja, negro, blanco, acentos en verde/azul según secciones) para un sitio turístico claro y legible.
- **Layout responsivo parcial** con Flexbox y Grid.
- **Modo oscuro** con botón fijo abajo a la derecha, persistencia en `localStorage` (JavaScript + CSS).
- **Animaciones y transiciones** con `@keyframes` y hover donde aporta claridad.
- **Estructura HTML** ordenada (landmarks, secciones comentadas) para facilitar corrección y mantenimiento.

---

## Tecnologías

- **HTML5**
- **CSS3** (incluye filtros con radios ocultos, masonry, lightbox con `:target`, formulario simulado, carrusel de testimonios)
- **JavaScript:** modo oscuro; scroll reveal en el blog
- Opcional: **GitHub Pages** u otro hosting estático para la publicación

---

## Funcionalidades destacadas (checklist)

**Navegación y layout**  
- Mega menú desplegable con CSS  
- Mismo header/footer en todas las páginas  
- Mapa embebido en el footer  

**Página principal**  
- Video en bucle de fondo + overlay de texto animado  
- Tarjetas de destinos destacados con hover  
- Contador animado al cargar (CSS)  
- Carrusel de testimonios (CSS)  

**Destinos**  
- Filtrado de tarjetas por categoría (solo CSS)  
- Galería masonry + lightbox  
- Tabla de horarios responsiva  

**Agencias**  
- Tarjetas con volteo 3D al hover  
- Información en el reverso + estrellas valoradas con CSS  

**Contacto**  
- Validación de campos; envío simulado  
- Spinner y modal de confirmación  

**Precios**  
- Tres niveles de plan con listas y tooltips  
- Botones para alternar precio mensual, semestral y anual (solo CSS)  
- Marco de las tarjetas de plan según el período activo  

**Blog**  
- Filtrado de posts por categoría (CSS)  
- Scroll reveal al entrar en vista  
- Comentarios con avatares en CSS  

**Modo oscuro**  
- Toggle en todas las páginas  
- Preferencia guardada en `localStorage`  

---

## Demo

📍 [Ver el sitio en GitHub Pages](https://solizfernando.github.io/practico_html_css-2026) — actualizá la URL si usás otro usuario o repositorio.

---

## Autor

Desarrollado por Chumacero Carlos y Soliz Fernando .

