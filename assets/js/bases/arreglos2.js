let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
console.log('Largo:', juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({primero}, {ultimo});

juegos.forEach( (elemento, indice, arr) => {
    console.log({elemento, indice, arr});    
});

let nuevaLongitudLongitud = juegos.push('F-Zero');
console.log({nuevaLongitudLongitud, juegos});

nuevaLongitudLongitud = juegos.unshift('Fire Emblem');
console.log({nuevaLongitudLongitud, juegos});

let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});    

console.log(juegos);

let pos = 1;
let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});

let metroidIndex = juegos.indexOf('Metroid');
console.log({metroidIndex});