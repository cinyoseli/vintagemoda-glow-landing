/* ========================================
   BRUMA CAFÉ - CART.JS
   Gestión del carrito de compras
   ======================================== */

// Renderizar carrito
function renderizarCarrito() {
  const carrito = JSON.parse(localStorage.getItem('bruma-carrito')) || [];
  const container = document.querySelector('.carrito-items');
  const carritoVacio = document.querySelector('.carrito-vacio');
  const resumen = document.querySelector('.carrito-resumen');

  if (!container) return;

  if (carrito.length === 0) {
    container.innerHTML = '';
    if (carritoVacio) carritoVacio.style.display = 'block';
    if (resumen) resumen.style.display = 'none';
    return;
  }

  if (carritoVacio) carritoVacio.style.display = 'none';
  if (resumen) resumen.style.display = 'block';

  container.innerHTML = carrito.map(item => `
    <div class="carrito-item" data-item-id="${item.id}">
      <div class="item-imagen" style="background-image: url('${item.imagen}'); background-size: cover; background-position: center;"></div>
      <div class="item-detalles">
        <div class="item-nombre">${item.nombre}</div>
        <div class="item-tamaño">${item.tamaño}</div>
        <div class="item-precio">$${item.precio}</div>
      </div>
      <div class="item-controles">
        <div style="display: flex; gap: 0.5rem; align-items: center;">
          <button class="btn-cantidad" data-tipo="restar">−</button>
          <input type="number" class="cantidad-input" value="${item.cantidad}" min="1" data-item-id="${item.id}">
          <button class="btn-cantidad" data-tipo="sumar">+</button>
        </div>
        <button class="btn-eliminar" data-item-id="${item.id}">Eliminar</button>
      </div>
    </div>
  `).join('');

  // Event listeners para cantidad
  document.querySelectorAll('.cantidad-input').forEach(input => {
    input.addEventListener('change', (e) => {
      const cantidad = parseInt(e.target.value);
      if (cantidad < 1) e.target.value = 1;
      actualizarCantidad(e.target.dataset.itemId, parseInt(e.target.value));
    });
  });

  // Botones sumar/restar
  document.querySelectorAll('.btn-cantidad').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const item = e.target.closest('.carrito-item');
      const input = item.querySelector('.cantidad-input');
      const cantidad = parseInt(input.value);
      
      if (btn.dataset.tipo === 'sumar') {
        actualizarCantidad(item.dataset.itemId, cantidad + 1);
      } else {
        if (cantidad > 1) {
          actualizarCantidad(item.dataset.itemId, cantidad - 1);
        }
      }
    });
  });

  // Botones eliminar
  document.querySelectorAll('.btn-eliminar').forEach(btn => {
    btn.addEventListener('click', (e) => {
      eliminarDelCarrito(e.target.dataset.itemId);
    });
  });

  actualizarResumen();
}

// Actualizar cantidad de un item
function actualizarCantidad(itemId, cantidad) {
  let carrito = JSON.parse(localStorage.getItem('bruma-carrito')) || [];
  const item = carrito.find(c => c.id === itemId);

  if (item) {
    if (cantidad < 1) {
      carrito = carrito.filter(c => c.id !== itemId);
    } else {
      item.cantidad = cantidad;
    }
    localStorage.setItem('bruma-carrito', JSON.stringify(carrito));
    renderizarCarrito();
    window.dispatchEvent(new Event('carritoActualizado'));
  }
}

// Eliminar del carrito
function eliminarDelCarrito(itemId) {
  let carrito = JSON.parse(localStorage.getItem('bruma-carrito')) || [];
  carrito = carrito.filter(item => item.id !== itemId);
  localStorage.setItem('bruma-carrito', JSON.stringify(carrito));
  renderizarCarrito();
  window.dispatchEvent(new Event('carritoActualizado'));
}

// Calcular y mostrar resumen
function actualizarResumen() {
  const carrito = JSON.parse(localStorage.getItem('bruma-carrito')) || [];
  const subtotal = carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  const impuesto = subtotal * 0.21; // IVA 21%
  const total = subtotal + impuesto;

  const resumenHtml = `
    <div class="resumen-linea">
      <span>Subtotal:</span>
      <span>$${subtotal.toFixed(2)}</span>
    </div>
    <div class="resumen-linea">
      <span>IVA (21%):</span>
      <span>$${impuesto.toFixed(2)}</span>
    </div>
    <div class="resumen-total">
      <span>Total:</span>
      <span>$${total.toFixed(2)}</span>
    </div>
    <div class="carrito-acciones">
      <button class="btn btn-primary btn-block" id="btn-finalizar">Finalizar pedido</button>
      <button class="btn btn-secondary btn-block" id="btn-pedidosya">Pedir por PedidosYa</button>
      <a href="menu.html" class="btn btn-outline btn-block">Seguir comprando</a>
    </div>
  `;

  const resumenContainer = document.querySelector('.carrito-resumen');
  if (resumenContainer) {
    resumenContainer.innerHTML = resumenHtml;

    // Event listeners para botones
    document.getElementById('btn-finalizar')?.addEventListener('click', () => {
      finalizarPedido();
    });

    document.getElementById('btn-pedidosya')?.addEventListener('click', () => {
      alert('Redirigiendo a PedidosYa...\n(Integración visual solamente)');
    });
  }
}

// Finalizar pedido
function finalizarPedido() {
  const carrito = JSON.parse(localStorage.getItem('bruma-carrito')) || [];
  
  if (carrito.length === 0) {
    alert('El carrito está vacío');
    return;
  }

  const subtotal = carrito.reduce((total, item) => total + (item.precio * item.cantidad), 0);
  const impuesto = subtotal * 0.21;
  const total = subtotal + impuesto;

  // Crear resumen del pedido
  const resumenPedido = carrito.map(item => 
    `${item.nombre} (${item.tamaño}) x${item.cantidad} = $${(item.precio * item.cantidad).toFixed(2)}`
  ).join('\n');

  const mensaje = `
    ¡Pedido confirmado!
    
    RESUMEN:
    ${resumenPedido}
    
    Subtotal: $${subtotal.toFixed(2)}
    IVA: $${impuesto.toFixed(2)}
    TOTAL: $${total.toFixed(2)}
    
    Tu pedido será preparado en 10-15 minutos.
    Gracias por tu compra en Bruma Café ☕
  `;

  alert(mensaje);
  
  // Limpiar carrito
  localStorage.removeItem('bruma-carrito');
  window.dispatchEvent(new Event('carritoActualizado'));
  renderizarCarrito();

  // Redirigir a home
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 1500);
}

// Vaciar carrito
function vaciarCarrito() {
  if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
    localStorage.removeItem('bruma-carrito');
    renderizarCarrito();
    window.dispatchEvent(new Event('carritoActualizado'));
  }
}

// Inicializar carrito cuando carga la página
document.addEventListener('DOMContentLoaded', renderizarCarrito);

// Actualizar cuando hay cambios en localStorage (de otra pestaña)
window.addEventListener('storage', renderizarCarrito);
window.addEventListener('carritoActualizado', renderizarCarrito);
