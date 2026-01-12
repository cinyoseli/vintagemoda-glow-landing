/* ========================================
   BRUMA CAFÉ - MENU.JS
   Gestión del menú y productos
   ======================================== */

// Base de datos de productos
const productos = [
  {
    id: 1,
    nombre: 'Espresso Clásico',
    descripcion: 'Espresso puro de origen único, intenso y aromático',
    precio: 250,
    imagen: 'assets/images/espresso.jpg'
  },
  {
    id: 2,
    nombre: 'Cappuccino Terciopelo',
    descripcion: 'Espresso con leche vaporizada y espuma sedosa',
    precio: 320,
    imagen: 'assets/images/terciopelo.jpg'
  },
  {
    id: 3,
    nombre: 'Flat White',
    descripcion: 'Combinación perfecta de espresso y microespuma de leche',
    precio: 310,
    imagen: 'assets/images/flatwhite.jpg'
  },
  {
    id: 4,
    nombre: 'Americano',
    descripcion: 'Espresso diluido en agua caliente, suave y largo',
    precio: 280,
    imagen: 'assets/images/americano.jpg'
  },
  {
    id: 5,
    nombre: 'Cold Brew',
    descripcion: 'Café frío preparado en frío por 12 horas, suave y refrescante',
    precio: 290,
    imagen: 'assets/images/coldbrew.jpg'
  },
  {
    id: 6,
    nombre: 'Macchiato',
    descripcion: 'Espresso manchado con una pequeña cantidad de espuma',
    precio: 300,
    imagen: 'assets/images/macchiato.jpg'
  },
  {
    id: 7,
    nombre: 'Cortado',
    descripcion: 'Espresso cortado con leche caliente en partes iguales',
    precio: 290,
    imagen: 'assets/images/cortado.jpg'
  },
  {
    id: 8,
    nombre: 'Affogato',
    descripcion: 'Bola de helado vainilla cubierta con espresso caliente',
    precio: 280,
    imagen: 'assets/images/affogato.jpg'
  },
  {
    id: 9,
    nombre: 'Moka Latte',
    descripcion: 'Espresso con chocolate y leche vaporizada',
    precio: 340,
    imagen: 'assets/images/mokalatte.jpg'
  }
];

// Tamaños disponibles
const tamaños = [
  { nombre: 'Chico', valor: 'S', multiplicador: 1 },
  { nombre: 'Mediano', valor: 'M', multiplicador: 1.2 },
  { nombre: 'Grande', valor: 'L', multiplicador: 1.4 }
];

// Renderizar menú de productos
function renderizarMenu() {
  const container = document.querySelector('.productos-grid');
  
  if (!container) return;

  container.innerHTML = productos.map(producto => `
    <div class="producto-card">
      <div class="producto-imagen" style="background-image: url('${producto.imagen}'); background-size: cover; background-position: center;"></div>
      <div class="producto-info">
        <h3 class="producto-nombre">${producto.nombre}</h3>
        <p class="producto-descripcion">${producto.descripcion}</p>
        <div class="producto-precio">$${producto.precio}</div>
        
        <div class="producto-tamaños">
          ${tamaños.map(tamaño => `
            <button class="tamano-option" data-tamaño="${tamaño.valor}" data-multiplicador="${tamaño.multiplicador}">
              ${tamaño.nombre}
            </button>
          `).join('')}
        </div>
        
        <button class="btn btn-primary btn-block agregar-carrito" data-id="${producto.id}">
          Agregar al carrito
        </button>
      </div>
    </div>
  `).join('');

  // Event listeners para tamaños
  document.querySelectorAll('.tamano-option').forEach(btn => {
    btn.addEventListener('click', function() {
      const parent = this.closest('.producto-card');
      parent.querySelectorAll('.tamano-option').forEach(b => b.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Event listeners para agregar al carrito
  document.querySelectorAll('.agregar-carrito').forEach(btn => {
    btn.addEventListener('click', function() {
      agregarAlCarrito(this);
    });
  });

  // Seleccionar tamaño mediano por defecto
  document.querySelectorAll('.tamano-option').forEach((btn, index) => {
    if (index % 3 === 1) { // M es el segundo en cada grupo
      btn.classList.add('active');
    }
  });
}

// Agregar producto al carrito
function agregarAlCarrito(button) {
  const card = button.closest('.producto-card');
  const productoId = parseInt(button.dataset.id);
  const tamaño = card.querySelector('.tamano-option.active');
  
  if (!tamaño) {
    alert('Por favor selecciona un tamaño');
    return;
  }

  const producto = productos.find(p => p.id === productoId);
  const multiplicador = parseFloat(tamaño.dataset.multiplicador);
  const precioFinal = Math.round(producto.precio * multiplicador * 100) / 100;

  const item = {
    id: productoId + tamaño.dataset.tamaño, // ID único combinando producto y tamaño
    productoId: productoId,
    nombre: producto.nombre,
    tamaño: tamaño.textContent,
    precio: precioFinal,
    cantidad: 1,
    imagen: producto.imagen
  };

  // Obtener carrito actual
  let carrito = JSON.parse(localStorage.getItem('bruma-carrito')) || [];

  // Verificar si el producto con el mismo tamaño ya existe
  const itemExistente = carrito.find(c => c.id === item.id);

  if (itemExistente) {
    itemExistente.cantidad++;
  } else {
    carrito.push(item);
  }

  // Guardar en localStorage
  localStorage.setItem('bruma-carrito', JSON.stringify(carrito));

  // Feedback visual
  button.textContent = '✓ Agregado';
  setTimeout(() => {
    button.textContent = 'Agregar al carrito';
  }, 1500);

  // Disparar evento personalizado
  window.dispatchEvent(new Event('carritoActualizado'));
}

// Inicializar menú cuando carga la página
document.addEventListener('DOMContentLoaded', renderizarMenu);
