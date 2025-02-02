// Lista de cartas de Greed Island
const cartas = [
    { nombre: 'Accompany', descripcion: 'Teletransporta a un jugador.', imagen: './assets/img/accompanyCard.webp', precio: 100 },
    { nombre: 'Blue Planet', descripcion: 'Una gema preciosa.', imagen: './assets/img/bluePlanetCard.webp', precio: 200 },
    { nombre: 'Angel’s Breath', descripcion: 'Cura cualquier herida.', imagen: './assets/img/angelsBreathCard.webp', precio: 150 },
    { nombre: 'Patch of Forest', descripcion: 'Convierte el desierto en un bosque.', imagen: './assets/img/patchOfForestCardwebp.webp', precio: 120 },
    { nombre: 'Breath of Archangel', descripcion: 'Revivir a alguien recientemente fallecido.', imagen: './assets/img/angelsBreathCard.webp', precio: 300 },
    { nombre: 'Paladin’s Necklace', descripcion: 'Protege al usuario de maldiciones y hechizos oscuros.', imagen: './assets/img/paladinsNecklaceCard.webp', precio: 250 },
    { nombre: 'Risky Dice', descripcion: 'Un dado con gran riesgo y recompensa.', imagen: './assets/img/riskyDiceCard.webp', precio: 80 },
    { nombre: 'Lucky Alexandrite', descripcion: 'Gema que mejora la suerte del usuario.', imagen: './assets/img/luckyAlexandriteCard.webp', precio: 220 },
    { nombre: 'Leave', descripcion: 'Te permite abandonar Greed Island sin penalizaciones.', imagen: './assets/img/leaveCard.webp', precio: 180 },
    { nombre: 'Clone', descripcion: 'Duplica cualquier objeto o carta.', imagen: './assets/img/cloneCard.webp', precio: 200 }
];

// Contenedor de las cartas
const cardsContainer = document.getElementById('cards-container');
const carrito = [];

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
                    <p class="card-price">$${carta.precio}</p>
                    <button class="btn btn-primary comprar-btn" data-nombre="${carta.nombre}">Comprar</button>
                </div>
            </div>
        `;

        // Añadir carta al contenedor
        cardsContainer.appendChild(col);
    });

    // Añadir evento a los botones de compra
    const botonesComprar = document.querySelectorAll('.comprar-btn');
    botonesComprar.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            const nombreCarta = e.target.getAttribute('data-nombre');
            const cartaComprada = cartas.find(carta => carta.nombre === nombreCarta);
            carrito.push(cartaComprada);
            mostrarCarrito();
        });
    });
}

// Función para mostrar el carrito
function mostrarCarrito() {
    const carritoContainer = document.getElementById('carrito-container');
    carritoContainer.innerHTML = '';
    carrito.forEach((carta) => {
        const item = document.createElement('div');
        item.classList.add('carrito-item');
        item.innerHTML = `
            <p>${carta.nombre} - $${carta.precio}</p>
        `;
        carritoContainer.appendChild(item);
    });

    // Añadir botón de finalizar compra solo si hay elementos en el carrito
    if (carrito.length > 0) {
        const finalizarCompraBtn = document.createElement('button');
        finalizarCompraBtn.classList.add('btn', 'btn-success', 'mt-3');
        finalizarCompraBtn.textContent = 'Finalizar Compra';
        finalizarCompraBtn.addEventListener('click', finalizarCompra);
        carritoContainer.appendChild(finalizarCompraBtn);
    }
}

// Función para finalizar la compra
function finalizarCompra() {
    Swal.fire({
        title: 'Ingrese su email para finalizar la compra:',
        input: 'email',
        inputPlaceholder: 'Ingrese su email',
        showCancelButton: true,
        confirmButtonText: 'Comprar',
        cancelButtonText: 'Cancelar',
        preConfirm: (email) => {
            if (!email) {
                Swal.showValidationMessage('Por favor ingrese un email válido');
            }
            return email;
        }
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('¡Compra realizada con éxito!', '', 'success');
            carrito.length = 0; // Vaciar el carrito
            mostrarCarrito(); // Actualizar la vista del carrito
        }
    });
}

// Mostrar las cartas en la tienda
mostrarCartas();

// Función para mostrar/ocultar el carrito
const toggleCarritoBtn = document.getElementById('toggle-carrito-btn');
toggleCarritoBtn.addEventListener('click', () => {
    const carritoContainer = document.getElementById('carrito-container');
    carritoContainer.classList.toggle('visible');
});
