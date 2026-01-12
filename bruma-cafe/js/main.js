/* ========================================
   BRUMA CAFÉ - MAIN.JS
   Funcionalidad general del sitio
   ======================================== */

// Menú móvil
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  // Cerrar menú al hacer clic en un enlace
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  });
}

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
  if (!e.target.closest('header')) {
    nav?.classList.remove('active');
  }
});

// Scroll suave para anclas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href !== '#') {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Actualizar contador del carrito en el header
function actualizarContadorCarrito() {
  const carrito = JSON.parse(localStorage.getItem('bruma-carrito')) || [];
  const contador = carrito.reduce((total, item) => total + item.cantidad, 0);
  const badge = document.querySelector('.carrito-count');
  
  if (badge) {
    if (contador > 0) {
      badge.textContent = contador;
      badge.style.display = 'flex';
    } else {
      badge.style.display = 'none';
    }
  }
}

// Actualizar contador al cargar la página
actualizarContadorCarrito();

// Observar cambios en localStorage
window.addEventListener('storage', actualizarContadorCarrito);

console.log('Bruma Café - Sitio cargado correctamente');
