# Sitio web de turismo — Programación y Servicios Web (TP 2026)

Sitio ficticio para una operadora o agencia de viajes, desarrollado con **HTML** y **CSS**, y **JavaScript** mínimo (modo oscuro y scroll reveal en el blog).
---

## Estructura del sitio

- **Header:** En todas las páginas, navegación entre secciones mediante **mega menú** desplegablem responsividad con bootstrap.
- **Footer:** Newsletter on sanitizacion en el enviado, enlaces a redes sociales y **mapa embebido** (Facultad de Ingeniería, UNJu).
- **Home (`index.html`):** Hero con **video de fondo en bucle** y **texto superpuesto** con animación; bloque de **destinos destacados** (tarjetas con hover); **contador** con animación al cargar utilizando Jquery; **testimonios** en carrusel CSS con Jquery.
- **Destinos (`destinos.html`):** Tarjetas informativas **sin imágenes**, **filtro por categoría** dinamico con Jquery (Patrimonio, Naturaleza, Aventura, Playa), **galería masonry** con **lightbox**, **tabla de precios** todos los elementos responsivos.
- **Agencias (`agencias.html`):** Tarjetas responsivas con **efecto flip**, foto y datos del asesor en el dorso, **rating con estrellas** animado con Jquery.
- **Contacto (`formulario.html`):** Formulario con validación, **spinner** al enviar y **modal** de confirmación con función de sanitización en envio de formualrios.
- **Precios (`precios.html`):** Tres planes de paquetes con **toggle mensual / semestral / anual** (radios + CSS `attr()`), **tooltips** en los ítems y efecto hover en las tarjetas; el borde de los planes cambia según el período seleccionado.
- **Modulo simulación Phsihing:** desarrollado en página Precios simulando una recoleccion real de datos bancarios ingresados a la página.
- **Blog (`blog.html`):** Artículos filtrables por categoría usando Jquery, **scroll reveal** con `IntersectionObserver`, sección de **comentarios** con avatares usnado Sprites CSS.

### Archivos principales

| Archivo        | Contenido principal                             |
|----------------|-------------------------------------------------|
| `index.html`   | Inicio, hero, destacados, contador, testimonios |
| `destinos.html`| Filtro, tarjetas, galería, precios              |
| `agencias.html`| Tarjetas flip y estrellas                       |
| `formulario.html` | Contacto                                     |
| `precios.html` | Planes, precios y simulación de Phishing        |
| `blog.html`    | Posts, filtros, comentarios                     |
| `css/styles.css` | Estilos globales, animaciones, modo oscuro    |

---

## Decisiones de diseño

- **Paleta cálida** (naranja, negro, blanco, acentos en verde/azul según secciones) para un sitio turístico claro y legible.
- **Layout responsivo parcial** utlizando componentes bootstrap.
- **Modo oscuro** con botón fijo abajo a la derecha, persistencia en `localStorage` (JavaScript + CSS).
- **Animaciones y transiciones** con `@keyframes` implementados mediante Jquerys dinamicamente y hover donde aporta claridad.
- **Estructura HTML** ordenada (landmarks, secciones comentadas) para facilitar corrección y mantenimiento.

---

## Tecnologías

- **HTML5**
- **CSS3** ( Galeria de destinosmasonry, lightbox con `:target`)
- **JavaScript:** modo oscuro; scroll reveal en el blog
- **Jquery:** Animaciones de reveal mediante scroll, filtros, contador y validaciones.
-**Bootsrao.** Responsividad en los elementos de las páginas.
---

## Funcionalidades destacadas (checklist)

**Navegación y layout**  
- Mega menú desplegable con CSS  
- Mismo header/footer en todas las páginas  
- Mapa embebido en el footer  

**Página principal**  
- Video en bucle de fondo + overlay de texto animado  
- Tarjetas de destinos destacados con hover  
- Contador animado al cargar  
- Carrusel de testimonios  

**Destinos**  
- Filtrado de tarjetas por categoría 
- Galería masonry + lightbox  
- Tabla de precios responsiva  

**Agencias**  
- Tarjetas con volteo 3D  
- Información en el reverso + estrellas valoradas 

**Contacto**  
- Validación de campos en tiempo real;  
- Spinner y modal de confirmación.

**Precios**  
- Tres niveles de plan con listas y tooltips   
- Marco de las tarjetas de plan según el período activo
- Simulación de Phishing

**Blog**  
- Filtrado de posts por categoría 
- Scroll reveal al entrar en vista  
- Comentarios con avatares usnado sprites CSS  

**Modo oscuro**  
- Toggle en todas las páginas  
- Preferencia guardada en `localStorage`  

---

## Demo

📍 [Ver el sitio en GitHub Pages](https://carloschuma0.github.io/TP3_PySW/)

---

## Autor

Desarrollado por Chumacero Carlos y Soliz Fernando, Daniel Palermo, Adriel Troncoso .

