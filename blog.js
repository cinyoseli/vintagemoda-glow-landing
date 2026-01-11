// ============================================
// BLOG JAVASCRIPT - FILTROS Y COMENTARIOS
// ============================================

// ALMACENAR COMENTARIOS EN LOCALSTORAGE
const commentsStorage = JSON.parse(localStorage.getItem('blogComments')) || {};

// INICIALIZAR COMENTARIOS AL CARGAR LA PÁGINA
document.addEventListener('DOMContentLoaded', function() {
  loadAllComments();
  setupFilterButtons();
});

// ============================================
// FUNCIONES DE FILTRADO
// ============================================

function setupFilterButtons() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remover clase active de todos los botones
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Agregar active al botón clickeado
      this.classList.add('active');
      
      // Filtrar artículos
      const category = this.getAttribute('data-category');
      filterArticles(category);
    });
  });
}

function filterArticles(category) {
  const articles = document.querySelectorAll('.article-card');
  
  articles.forEach(article => {
    if (category === 'todos') {
      article.style.display = 'block';
      setTimeout(() => article.style.opacity = '1', 10);
    } else if (article.getAttribute('data-category') === category) {
      article.style.display = 'block';
      setTimeout(() => article.style.opacity = '1', 10);
    } else {
      article.style.opacity = '0';
      setTimeout(() => article.style.display = 'none', 300);
    }
  });
}

// ============================================
// FUNCIONES DE ARTÍCULOS (Expandir/Contraer)
// ============================================

function toggleArticle(button) {
  const article = button.closest('.article-card');
  const fullContent = article.querySelector('.article-full');
  const readBtn = article.querySelector('.read-btn');
  
  if (fullContent.style.display === 'none' || fullContent.style.display === '') {
    // Expandir
    fullContent.style.display = 'block';
    readBtn.style.display = 'none';
    
    // Scroll suave al artículo
    setTimeout(() => {
      fullContent.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 50);
  } else {
    // Contraer
    fullContent.style.display = 'none';
    readBtn.style.display = 'block';
  }
}

// ============================================
// FUNCIONES DE COMENTARIOS
// ============================================

function addComment(event, form) {
  event.preventDefault();
  
  // Obtener datos
  const name = form.querySelector('.comment-name').value.trim();
  const text = form.querySelector('.comment-text').value.trim();
  
  if (!name || !text) {
    alert('Por favor completa todos los campos');
    return;
  }
  
  // Obtener índice del artículo
  const article = form.closest('.article-card');
  const articleIndex = Array.from(document.querySelectorAll('.article-card')).indexOf(article);
  
  // Crear objeto de comentario
  const comment = {
    name: name,
    text: text,
    timestamp: new Date().toLocaleString('es-ES')
  };
  
  // Guardar en localStorage
  if (!commentsStorage[articleIndex]) {
    commentsStorage[articleIndex] = [];
  }
  commentsStorage[articleIndex].push(comment);
  localStorage.setItem('blogComments', JSON.stringify(commentsStorage));
  
  // Limpiar formulario
  form.reset();
  
  // Recargar comentarios
  loadComments(article);
  
  // Feedback visual
  form.style.opacity = '0.5';
  setTimeout(() => {
    form.style.opacity = '1';
  }, 300);
}

function loadAllComments() {
  const articles = document.querySelectorAll('.article-card');
  
  articles.forEach((article, index) => {
    loadComments(article, index);
  });
}

function loadComments(article, index = null) {
  if (index === null) {
    index = Array.from(document.querySelectorAll('.article-card')).indexOf(article);
  }
  
  const commentsList = article.querySelector('.comments-list');
  
  // Limpiar lista anterior
  commentsList.innerHTML = '';
  
  // Obtener comentarios del artículo
  const articleComments = commentsStorage[index] || [];
  
  if (articleComments.length === 0) {
    commentsList.innerHTML = '<p style="opacity: 0.6; text-align: center; padding: 20px;">Sin comentarios aún. ¡Sé el primero!</p>';
    return;
  }
  
  // Renderizar comentarios
  articleComments.forEach(comment => {
    const commentDiv = document.createElement('div');
    commentDiv.className = 'comment-item';
    commentDiv.innerHTML = `
      <div class="comment-author">${escapeHtml(comment.name)}</div>
      <div class="comment-text">${escapeHtml(comment.text)}</div>
      <div class="comment-time">${comment.timestamp}</div>
    `;
    commentsList.appendChild(commentDiv);
  });
  
  // Auto-scroll al último comentario
  commentsList.scrollTop = commentsList.scrollHeight;
}

// ============================================
// UTILIDADES
// ============================================

function escapeHtml(text) {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, m => map[m]);
}

// ============================================
// ANIMACIONES AL SCROLL (Opcional)
// ============================================

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
  const articles = document.querySelectorAll('.article-card');
  articles.forEach(article => {
    article.style.opacity = '0';
    article.style.transform = 'translateY(20px)';
    article.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(article);
  });
});
