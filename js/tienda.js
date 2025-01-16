// Lista de cartas de Greed Island
const cartas = [
    { nombre: 'Accompany', descripcion: 'Teletransporta a un jugador.', imagen: './assets/img/accompanyCard.webp' },
    { nombre: 'Blue Planet', descripcion: 'Una gema preciosa.', imagen: './assets/img/bluePlanetCard.webp' },
    { nombre: 'Angel’s Breath', descripcion: 'Cura cualquier herida.', imagen: './assets/img/angelsBreathCard.webp' },
    { nombre: 'Patch of Forest', descripcion: 'Convierte el desierto en un bosque.', imagen: './assets/img/patchOfForestCardwebp.webp' },
    { nombre: 'Breath of Archangel', descripcion: 'Revivir a alguien recientemente fallecido.', imagen: './assets/img/breathOfArchangelCard.webp' },
    { nombre: 'Paladin’s Necklace', descripcion: 'Protege al usuario de maldiciones y hechizos oscuros.', imagen: './assets/img/paladinsNecklaceCard.webp' },
    { nombre: 'Risky Dice', descripcion: 'Un dado con gran riesgo y recompensa.', imagen: './assets/img/riskyDiceCard.webp' },
    { nombre: 'Lucky Alexandrite', descripcion: 'Gema que mejora la suerte del usuario.', imagen: './assets/img/luckyAlexandriteCard.webp' },
    { nombre: 'Teleport', descripcion: 'Teletransporta al usuario a cualquier lugar.', imagen: './assets/img/teleportCard.webp' },
    { nombre: 'Clone', descripcion: 'Duplica cualquier objeto o carta.', imagen: './assets/img/cloneCard.webp' }
  ];
  
  
  // Contenedor de las cartas
  const cardsContainer = document.getElementById('cards-container');
  
  // Función para generar las cartas
  function mostrarCartas() {
    cartas.forEach((carta) => {
      // Crear columna
      const col = document.createElement('div');
      col.classList.add('col-12', 'col-sm-6', 'col-md-4', 'col-lg-3');
  
      // Crear carta
      col.innerHTML = `
        <div class="card h-100">
          <img src="${carta.imagen}" class="card-img-top" alt="${carta.nombre}">
          <div class="card-body">
            <h5 class="card-title">${carta.nombre}</h5>
            <p class="card-text">${carta.descripcion}</p>
          </div>
        </div>
      `;
      
      // Añadir carta al contenedor
      cardsContainer.appendChild(col);
    });
  }
  
  // Mostrar las cartas en la tienda
  mostrarCartas();
  
