function saludar(parametros){
    console.log(arguments)
    console.log("Hola mundo");
    return [1,2,3,4,5];
    //No se ejecuta
    console.log("Soy un codigo despues de return");
}

const saludar2 = function(nombre){
    console.log("Hola " + nombre);
}

const saludar3 = () => {
    console.log("Hola flecha");
}

const saludar4 = ( nombre ) => {
    console.log("Hola " + nombre);
}

const retornoDeSaludar = saludar("Juan", 40, true, "hola");
console.log({retornoDeSaludar});
// saludar2("Juan"); 
// saludar3();
// saludar4("Pedro");


function sumar(a,b){
    return a + b;
} 

const sumar2 = (a,b) => a + b;  

function getAleatorio(){
    return Math.random();
}

const getAleatorio2 = () => Math.random();

console.log(sumar2(3,2));
console.log(getAleatorio2());