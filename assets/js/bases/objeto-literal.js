let personaje = {
    nombre: 'Aragorn',
    raza: 'Dúnadan del Norte',
    vivo: false,
    edad: 87,
    arma: 'Espada',
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['armadura', 'capa', 'botas', 'guantes'],
    direccion: {
        calle: 'Calle falsa',
        numero: '123'
    },
    'pelicula': 'El señor de los anillos'
};

console.log(personaje);
console.log(personaje.nombre); // Aragorn
console.log(personaje['direccion']); 

console.log("Lat ",personaje.coords.lat);
console.log("Lng ",personaje.coords.lng); 

console.log("No. trajes ",personaje.trajes.length);
console.log("Ultimo traje ",personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log("Vivo ",personaje[x]);

console.log("Película ",personaje['pelicula']);

// Más detalles

delete personaje.edad;
console.log(personaje);

personaje.casado = true; 

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

Object.freeze(personaje); // No se pueden agregar, modificar o eliminar propiedades
personaje.casado = false;
personaje.direccion.ubicacion = 'Gondor';
console.log(personaje);

const propiedades = Object.getOwnPropertyNames(personaje);
console.log(propiedades);
const valores = Object.values(personaje);
console.log({valores});