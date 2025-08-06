// ===============================
// Mostrar Fecha y Hora Actual
// ===============================
function actualizarFechaHora() {
  const ahora = new Date();
  const fechaHora = ahora.toLocaleString('es-AR', {
    dateStyle: 'full',
    timeStyle: 'short'
  });
  const elemento = document.getElementById('fecha-hora');
  if (elemento) {
    elemento.textContent = fechaHora;
  }
}
setInterval(actualizarFechaHora, 1000);
actualizarFechaHora();

// ===============================
// Toggle de Calendario de Eventos
// ===============================
function mostrarEventos() {
  const lista = document.getElementById("eventos");
  if (lista) {
    lista.style.display = (lista.style.display === "none" || lista.style.display === "") ? "block" : "none";
  }
}

// ===============================
// Botón para Volver Arriba
// ===============================
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
