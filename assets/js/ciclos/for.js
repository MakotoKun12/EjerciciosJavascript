
const heroes = ['Batman','Superman', 'Mujer maravilla', 'Aquaman'];

console.warn('For traditional');

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);    
}

console.warn('For in')
for (let i in heroes) {
    console.log(heroes[i]);
}

console.warn('For on')
for(let heroe of heroes){
    console.log(heroe);
}





