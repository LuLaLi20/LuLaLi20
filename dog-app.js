// JavaScript para la App de Perros

// Datos de razas de perros
const dogBreeds = [
    {
        name: 'Labrador Retriever',
        description: 'Amigable, activo y gentil. Excelente compañero familiar.',
        size: 'Grande',
        temperament: 'Amigable, Activo, Leal'
    },
    {
        name: 'Pastor Alemán',
        description: 'Inteligente, leal y valiente. Ideal para trabajo y compañía.',
        size: 'Grande',
        temperament: 'Inteligente, Protector, Leal'
    },
    {
        name: 'Golden Retriever',
        description: 'Cariñoso, inteligente y devoto. Perfecto para familias.',
        size: 'Grande',
        temperament: 'Cariñoso, Inteligente, Confiable'
    },
    {
        name: 'Bulldog Francés',
        description: 'Adaptable, juguetón y alerta. Ideal para apartamentos.',
        size: 'Pequeño',
        temperament: 'Juguetón, Adaptable, Inteligente'
    },
    {
        name: 'Beagle',
        description: 'Amigable, curioso y alegre. Excelente cazador y mascota.',
        size: 'Mediano',
        temperament: 'Curioso, Amigable, Alegre'
    },
    {
        name: 'Chihuahua',
        description: 'Val, devoto y rápido. El perro más pequeño del mundo.',
        size: 'Muy Pequeño',
        temperament: 'Valiente, Devoto, Alerta'
    }
];

// Referencias a elementos del DOM
const dogContainer = document.getElementById('dogContainer');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const randomBtn = document.getElementById('randomBtn');
const randomDogCard = document.getElementById('randomDogCard');

// Función para crear una tarjeta de perro
function createDogCard(dog) {
    return `
        <div class="dog-card">
            <h3>${dog.name}</h3>
            <p>${dog.description}</p>
            <p class="breed-info">Tamaño: ${dog.size}</p>
            <p class="breed-info">Temperamento: ${dog.temperament}</p>
        </div>
    `;
}

// Función para mostrar todas las razas
function displayAllBreeds() {
    dogContainer.innerHTML = dogBreeds.map(dog => createDogCard(dog)).join('');
}

// Función para buscar razas
function searchBreeds() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        displayAllBreeds();
        return;
    }
    
    const filteredDogs = dogBreeds.filter(dog => 
        dog.name.toLowerCase().includes(searchTerm) ||
        dog.description.toLowerCase().includes(searchTerm) ||
        dog.temperament.toLowerCase().includes(searchTerm)
    );
    
    if (filteredDogs.length === 0) {
        dogContainer.innerHTML = '<p style="text-align: center; color: white; font-size: 1.2em;">No se encontraron razas que coincidan con tu búsqueda.</p>';
    } else {
        dogContainer.innerHTML = filteredDogs.map(dog => createDogCard(dog)).join('');
    }
}

// Función para mostrar perro aleatorio
function showRandomDog() {
    const randomIndex = Math.floor(Math.random() * dogBreeds.length);
    const randomDog = dogBreeds[randomIndex];
    randomDogCard.innerHTML = createDogCard(randomDog);
}

// Event Listeners
searchBtn.addEventListener('click', searchBreeds);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBreeds();
    }
});
randomBtn.addEventListener('click', showRandomDog);

// Mostrar todas las razas al cargar la página
displayAllBreeds();
