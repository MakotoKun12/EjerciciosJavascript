// function crearPersona(nombre, apellido, edad) {
//     return { nombre, apellido, edad };
// }

const crearPersona = (nombre, apellido, edad) => ({nombre, apellido, edad});

const persona = crearPersona("Juan", "Perez", 40);
console.log(persona);

function imprimeArgumentos(){
    console.log(arguments);
}

const imprimeArgumentos2 = ( edad, ...args ) => {
    //console.log( {edad, args} );
    return args;
}

const [vivo, casado, saludo, despedida] = imprimeArgumentos2(10,true,false,"Hola","Adios");
console.log({vivo, casado, saludo, despedida});

const { apellido: nuevoApellido } = crearPersona("Fernando","Perez",19);
console.log({nuevoApellido});


const Aragorn = {
    nombre: 'Aragorn',
    raza: 'Dúnadan del Norte',
    vivo: false,
    //edad: 87,
    arma: 'Espada',
    trajes: ['armadura', 'capa', 'botas', 'guantes'],
};

const imprimePropiedades = ({nombre,raza, vivo,edad = 0,arma,trajes}) => {
    console.log({nombre});
    console.log({raza});   
    console.log({vivo});
    console.log({edad});
    console.log({arma});
    console.log({trajes});
}


imprimePropiedades(Aragorn);



