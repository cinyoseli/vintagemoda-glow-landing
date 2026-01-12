# ☕ Bruma Café - Proyecto Portfolio

Sitio web moderno, responsivo y profesional para una cafetería de especialidad ficticia. Desarrollado como proyecto de portfolio para demostrar habilidades en **HTML semántico**, **CSS moderno** y **JavaScript ES6+**.

## 🎨 Características

✅ **Diseño Responsivo** - Mobile first, funciona perfectamente en todos los dispositivos  
✅ **UI/UX Moderno** - Interfaz limpia, minimalista y elegante  
✅ **Carrito de Compras Funcional** - Gestión con localStorage  
✅ **Menú Dinámico** - Productos renderizados desde JavaScript  
✅ **Formularios Validados** - Login, registro y contacto con validaciones  
✅ **CSS Variables** - Tema centralizado y fácil de personalizar  
✅ **Código Modular** - JavaScript organizado en módulos reutilizables  
✅ **Animaciones Suaves** - Transiciones y efectos visuales profesionales  

---

## 📁 Estructura del Proyecto

```
bruma-cafe/
│
├── index.html              # Página de inicio (Hero + Filosofía + Destacados)
├── menu.html               # Menú completo de productos
├── pedidos.html            # Carrito de compras
├── login.html              # Formulario de ingreso
├── register.html           # Formulario de registro
├── contact.html            # Página de contacto
│
├── /css
│   └── styles.css          # Todos los estilos (1000+ líneas)
│
├── /js
│   ├── main.js             # Funcionalidad general (menú móvil, contador)
│   ├── menu.js             # Gestión del menú y productos
│   └── cart.js             # Gestión del carrito de compras
│
└── /assets
    └── /images             # Carpeta para imágenes (placeholders utilizados)
```

---

## 🎨 Branding y Colores

| Elemento | Color | Código |
|----------|-------|--------|
| Fondo Principal | Beige Claro | `#f5f1ed` |
| Texto Principal | Marrón Café | `#4a3c2a` |
| Acentos | Verde Oliva | `#7a8c5e` |
| Detalles | Gris Cálido | `#8b8680` |

**Tipografía:**
- **Títulos:** Georgia / Garamond (serif elegante)
- **Texto:** Segoe UI / Roboto (sans-serif moderna)

---

## 🧩 Páginas y Funcionalidad

### 🏠 `index.html` - Home
- **Hero section** con título, slogan y CTAs
- **Sección de filosofía** con grid layout
- **3 productos destacados** con botones agregar al carrito
- **CTA prominente** para pedidos
- **Footer** completo con links y redes sociales

### ☕ `menu.html` - Menú
- **Grid responsivo** de productos (3 columnas desktop, 1 móvil)
- **9 bebidas diferentes** con descripción y precio
- **Selector de tamaño** (Chico/Mediano/Grande) con multiplicador de precio
- **Botón agregar al carrito** funcional
- Productos renderizados dinámicamente desde `menu.js`

### 🛒 `pedidos.html` - Carrito
- **Lista de items** con imagen, nombre, tamaño y precio
- **Controles de cantidad** (botones +/- e input)
- **Botón eliminar** por producto
- **Resumen de totales** (subtotal, IVA 21%, total)
- **Opciones de pago:**
  - Finalizar pedido (con confirmación)
  - Pedir por PedidosYa (visual)
  - Seguir comprando
- **Carrito vacío** con mensaje y link al menú

### 🔐 `login.html` - Ingreso
- Formulario con validaciones en tiempo real
- Campos: email, contraseña, "recuérdame"
- Link a registro y recuperación de contraseña
- Estilos centrados y limpios

### 📝 `register.html` - Registro
- Formulario completo con 4 campos
- Validaciones: nombre (mínimo 3 caracteres), email válido, contraseña (mínimo 6), confirmación
- Aceptación de términos y condiciones
- Feedback de validación en tiempo real

### 📞 `contact.html` - Contacto
- **Formulario** con campos: nombre, email, asunto, mensaje
- **Horarios de atención** en formato card
- **Información de ubicación** (dirección, teléfono, email)
- **Placeholder de mapa** embebido
- **Sección de redes sociales** al final

---

## ⚙️ Funcionalidad JavaScript

### 📱 `main.js` - Funcionalidad General
```javascript
// Menú móvil toggle
// Scroll suave para anclas
// Actualizar contador del carrito en tiempo real
// Observar cambios en localStorage desde otras pestañas
```

### 🛍️ `menu.js` - Gestión de Productos
```javascript
// Base de datos de 9 productos con:
// - id, nombre, descripción, precio, icono

// Funciones:
// - renderizarMenu() → Genera grid de productos dinámicamente
// - agregarAlCarrito() → Agrega producto con tamaño seleccionado
// - Precio dinámico según tamaño (multiplicador)
```

### 🛒 `cart.js` - Gestión del Carrito
```javascript
// Funciones principales:
// - renderizarCarrito() → Renderiza items almacenados
// - actualizarCantidad() → Modifica cantidad de items
// - eliminarDelCarrito() → Elimina producto
// - actualizarResumen() → Calcula totales y renderiza botones
// - finalizarPedido() → Confirmación y limpieza de carrito
// - vaciarCarrito() → Vacía todo el carrito

// Almacenamiento en localStorage con key: 'bruma-carrito'
// Sincronización entre pestañas con 'storage' event
```

---

## 🎯 Características Técnicas

### ✅ HTML
- Semántico con etiquetas correctas (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Atributos accesibles (`alt`, `title`, `aria-*`)
- Formularios con labels asociados y validación HTML5

### ✅ CSS
- **Variables CSS** para colores, tipografía y espaciado
- **Flexbox y Grid** para layouts responsive
- **Mobile first** - estilos base para móvil, media queries para desktop
- **Transiciones suaves** en todos los elementos interactivos
- **Animaciones** fadeInUp para hero section
- **1000+ líneas** de CSS organizado con comentarios claros

### ✅ JavaScript ES6+
- Arrow functions y destructuring
- Template literals para renderizado de HTML
- Event listeners modernos
- localStorage para persistencia de datos
- Modularización en 3 archivos separados
- Validaciones en tiempo real de formularios

### ✅ Responsive Design
- **Breakpoints:**
  - 768px: Tablets
  - 480px: Móviles pequeños
- **Componentes adaptables:**
  - Menú hamburguesa en móvil
  - Grid a 1 columna en móvil
  - Formularios full-width en móvil
  - Imágenes y containers fluidos

---

## 🚀 Cómo Usar

### Abrir el sitio
1. Descarga los archivos
2. Abre `index.html` en tu navegador
3. ¡Listo! El sitio es completamente funcional en local

### Flujo de usuario
1. **Home** → Explora la filosofía y destacados
2. **Menú** → Selecciona productos, elige tamaño, agrega al carrito
3. **Carrito** → Modifica cantidades o elimina productos
4. **Pedido** → Finaliza la compra (demo)
5. **Login/Registro** → Formularios con validación
6. **Contacto** → Envía un mensaje

### LocalStorage
El carrito se guarda automáticamente en `localStorage`. Puedes:
- Cerrar el navegador y tus items persisten
- Abrir en otra pestaña y sincroniza automáticamente
- Limpiar localStorage para resetear el carrito

---

## 🎨 Personalización

### Cambiar colores
Edita las variables CSS en `css/styles.css`:
```css
:root {
  --beige-claro: #f5f1ed;     /* Fondo */
  --marron-cafe: #4a3c2a;     /* Texto */
  --verde-oliva: #7a8c5e;     /* Acentos */
  --gris-calido: #8b8680;     /* Detalles */
}
```

### Agregar/modificar productos
En `js/menu.js`, modifica el array `productos`:
```javascript
const productos = [
  {
    id: 1,
    nombre: 'Nombre del café',
    descripcion: 'Descripción corta',
    precio: 250,
    icono: '☕'
  },
  // ... más productos
];
```

### Cambiar precios
Los precios se multiplican según tamaño:
- **Chico (S):** x1.0
- **Mediano (M):** x1.2
- **Grande (L):** x1.4

Modifica en `js/menu.js` array `tamaños`.

---

## 📊 Estadísticas del Proyecto

| Métrica | Cantidad |
|---------|----------|
| Archivos HTML | 6 |
| Archivos CSS | 1 (1000+ líneas) |
| Archivos JS | 3 (500+ líneas totales) |
| Productos en menú | 9 |
| Páginas | 6 |
| Componentes responsivos | 15+ |
| Variables CSS | 15 |
| Media queries | 3 |

---

## 🔧 Tecnologías Utilizadas

- **HTML5** - Marcado semántico
- **CSS3** - Flexbox, Grid, Variables, Animaciones
- **JavaScript ES6+** - Módulos, arrow functions, destructuring
- **localStorage API** - Persistencia de datos
- **FontAwesome/Emojis** - Iconografía

---

## 💡 Casos de Uso para Portfolio

Este proyecto es perfecto para demostrar:

1. **Dominio de HTML semántico** - Estructura correcta
2. **CSS moderno** - Variables, Grid, Flexbox, responsive
3. **JavaScript funcional** - Manipulación del DOM, eventos, storage
4. **Diseño responsive** - Funciona en cualquier dispositivo
5. **Buenas prácticas** - Código limpio, comentado y modular
6. **Pensamiento UX/UI** - Flujo lógico y accesibilidad
7. **Gestión de estado** - Carrito con localStorage
8. **Validación de formularios** - Frontend validation

---

## 📝 Notas

- **Sin backend:** Este es un proyecto frontend puro. No hay API real.
- **Demo visual:** Los formularios no envían datos reales, solo muestran confirmaciones.
- **PedidosYa:** Link visual sin integración real.
- **Mapa:** Placeholder visual, no es un mapa real.
- **IVA:** 21% - Ajusta según tu país en `cart.js`

---

## 🎓 Aprendizajes Clave

✅ Implementación de e-commerce funcional sin backend  
✅ Sincronización de datos con localStorage  
✅ Validación de formularios en tiempo real  
✅ Diseño responsive con CSS Grid y Flexbox  
✅ Arquitectura modular de JavaScript  
✅ Mejora progresiva con CSS variables  
✅ Accesibilidad web básica  
✅ Performance con animaciones suaves  

---

**Desarrollado como proyecto de portfolio. ¡Siéntete libre de usarlo como base para tus propios proyectos!** ☕

---

## 📞 Contacto

Para consultas o sugerencias sobre el proyecto, puedes contactar a través de la página de contacto del sitio.

**© 2026 Bruma Café - Portfolio Project**
