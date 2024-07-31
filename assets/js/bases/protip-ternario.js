const elMayor = (a, b) => (a > b) ? a : b;

const tieneDinero = ( miembro) => (miembro) ? '2 Dolares' : '10 Dolares';

console.log(elMayor(25, 10)); // 10
console.log(tieneDinero(false)); // 10 Dolares

const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    //(()=>'Nick Fury')()
];

console.log(amigosArr); // [ 'Peter', 'Tony', 'Dr. Strange', 'Thor' ]

const nota = 85;
const grado = nota >= 95 ? 'A+' : 
            nota >= 90 ? 'A' : 
            nota >= 85 ? 'B+' : 
            nota >= 80 ? 'B' : 
            nota >= 75 ? 'C+' : 
            nota >= 70 ? 'C' : 'F';

console.log({nota, grado}); // { nota: 85, grado: 'B+' }

