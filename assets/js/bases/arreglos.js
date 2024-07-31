//const arr = new Array(10);
//const arr = [];
//console.log(arr);

const numeros = [1, 2, 3, 4, 5];
console.log({numeros});
console.table(numeros[0]);

let arregloCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
    function(){},
    ()=>{},
    {a:1},
    ['X', 'Megaman', 'Zero', 'Dr. Light', [
        'Dr. Willy',
        'Woodman'
    ]]
];

console.log({arregloCosas});
console.log(arregloCosas[7][3]);
console.log(arregloCosas[7][4][1]);