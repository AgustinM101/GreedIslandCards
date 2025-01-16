// selecciona el boton de Ingresar y la pantalla de carga
const ingresarBtn = document.getElementById('ingresar-btn');
const loadingScreen = document.getElementById('loading-screen');

ingresarBtn.addEventListener('click', function () {
  // Muestra la pantalla de carga
  loadingScreen.style.visibility = 'visible';
  loadingScreen.style.opacity = '1';

  // Redirige a `tienda.html` después de la animación
  setTimeout(() => {
    window.location.href = 'tienda.html';
  }, 5300); // 5,3 segundos de espera 
});

