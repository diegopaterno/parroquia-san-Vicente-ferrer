
document.getElementById('btn-cargar').addEventListener('click', function () {
  const grid = document.querySelector('.grid');
  for (let i = 10; i <= 12; i++) {
    const img = document.createElement('img');
    img.src = `img/foto${i}.jpg`;
    img.alt = `Evento ${i}`;
    grid.appendChild(img);
  }
  this.style.display = 'none'; // Oculta el botón después de cargar más
});
