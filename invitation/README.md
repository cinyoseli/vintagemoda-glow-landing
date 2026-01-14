# 💌 Invitación Digital Animada

Una invitación digital elegante, moderna y completamente responsive para eventos especiales. Diseñada con HTML, CSS y JavaScript vanilla.

![Preview](https://img.shields.io/badge/Status-Ready-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## ✨ Características

### Tarjeta Digital Animada (Hero Section)
- ✅ Diseño moderno y elegante
- ✅ Animaciones de entrada suaves (fade, slide, scale)
- ✅ Título del evento, nombre, fecha y hora
- ✅ Botón CTA que navega a los detalles
- ✅ Diseño mobile-first y totalmente responsive

### Página de Aterrizaje (Landing Page)
- ⏱️ **Contador regresivo en tiempo real** con JavaScript
- 📍 Detalles del evento (fecha, hora, ubicación)
- 💬 Botón de confirmación por WhatsApp (RSVP)
- 🖼️ Sección de galería de imágenes
- 🎨 Paleta de colores suaves y tipografía limpia

### Características Técnicas
- 🚀 HTML semántico y accesible
- 🎭 Animaciones CSS con keyframes
- 📱 Diseño responsive (móvil, tablet, desktop)
- ♿ Accesibilidad mejorada (ARIA labels, buen contraste)
- 🔄 Smooth scrolling entre secciones
- 💅 Efectos hover sutiles
- 🎯 Código limpio y reutilizable
- 🌐 Sin dependencias externas (vanilla JS)

## 📁 Estructura del Proyecto

```
invitation/
│
├── index.html          # Archivo HTML principal
├── README.md          # Este archivo
│
├── css/
│   └── styles.css     # Estilos y animaciones
│
├── js/
│   └── app.js         # Lógica del contador y interacciones
│
└── assets/            # Carpeta para imágenes
    └── (tus imágenes aquí)
```

## 🚀 Inicio Rápido

### 1. Abrir el Proyecto
Simplemente abre `index.html` en tu navegador favorito:
- Doble clic en el archivo
- O arrastra el archivo al navegador
- O usa Live Server en VS Code

### 2. Personalizar el Contenido

#### Cambiar Fecha del Evento
Edita `js/app.js` línea 12:
```javascript
const CONFIG = {
    // Año, Mes (0-11), Día, Hora, Minuto, Segundo
    eventDate: new Date(2026, 2, 15, 18, 0, 0), // 15 de Marzo, 2026 a las 18:00
};
```

#### Cambiar Textos
Edita `index.html`:
- **Título del evento**: línea 31 (`<h1 class="event-title">`)
- **Nombre del homenajeado**: línea 34 (`<h2>`)
- **Fecha y hora**: líneas 38-47
- **Detalles del evento**: líneas 99-119

#### Configurar WhatsApp
Edita `index.html` línea 129:
```html
<a href="https://wa.me/TU_NUMERO?text=Mensaje personalizado">
```
Reemplaza `TU_NUMERO` con tu número de WhatsApp (incluye código de país, ej: 521234567890)

#### Cambiar Colores
Edita `css/styles.css` líneas 5-15:
```css
:root {
    --primary-color: #d4a5a5;      /* Color principal */
    --primary-dark: #b88989;       /* Color oscuro */
    --primary-light: #f5e6e6;      /* Color claro */
    /* ... más colores */
}
```

### 3. Agregar Imágenes a la Galería

Reemplaza los placeholders en `index.html` líneas 138-177:
```html
<div class="gallery-item">
    <img src="assets/imagen1.jpg" alt="Descripción">
</div>
```

## 🎨 Paleta de Colores Predeterminada

| Color | Hex | Uso |
|-------|-----|-----|
| Rosa Principal | `#d4a5a5` | Títulos, acentos |
| Rosa Oscuro | `#b88989` | Botones, hover |
| Rosa Claro | `#f5e6e6` | Fondos suaves |
| Verde WhatsApp | `#25D366` | Botón RSVP |

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: ≤ 480px

## 🛠️ Personalización Avanzada

### Cambiar Animaciones
Las animaciones están en `css/styles.css`:
- `@keyframes cardEntrance` - Entrada de la tarjeta (línea 77)
- `@keyframes fadeInDown` - Fade in desde arriba (línea 156)
- `@keyframes fadeInScale` - Escala con fade (línea 165)
- `@keyframes bounce` - Indicador de scroll (línea 239)

### Usar desde la Consola
Abre la consola del navegador (F12) y personaliza dinámicamente:
```javascript
customizeInvitation({
    eventDate: new Date(2026, 11, 25, 19, 0, 0),
    whatsappNumber: '1234567890',
    whatsappMessage: 'Confirmo mi asistencia al evento'
});
```

## 💡 Casos de Uso

Este proyecto es perfecto para:
- 🎂 Cumpleaños
- 💍 Aniversarios
- 🍼 Baby showers
- 🎓 Graduaciones
- 🎊 Celebraciones en general
- 💼 Eventos corporativos

## ⚡ Características JavaScript

### Contador Regresivo
- Actualización en tiempo real cada segundo
- Animación sutil en cambio de dígitos
- Manejo automático cuando el evento expira
- Formato de dos dígitos (00)

### Scroll Suave
- Navegación fluida entre secciones
- Offset configurable

### Animaciones por Scroll
- Elementos aparecen al entrar en viewport
- Usando Intersection Observer API

### Efectos Parallax
- Movimiento sutil en la sección hero

## ♿ Accesibilidad

- Etiquetas ARIA en botones
- Contraste de color AAA
- Navegación por teclado
- Soporte para `prefers-reduced-motion`
- HTML semántico

## 🌐 Compatibilidad de Navegadores

- ✅ Chrome (últimas 2 versiones)
- ✅ Firefox (últimas 2 versiones)
- ✅ Safari (últimas 2 versiones)
- ✅ Edge (últimas 2 versiones)
- ✅ Opera (últimas 2 versiones)

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🤝 Contribuciones

Las contribuciones, issues y feature requests son bienvenidas.

## 📧 Contacto

Si tienes preguntas o sugerencias, no dudes en contactar.

---

**Creado con ❤️ para eventos especiales**

¡Disfruta creando invitaciones hermosas y profesionales! ✨
