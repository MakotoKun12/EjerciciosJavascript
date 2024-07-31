let a = 5;

if (a > 10) { // undefined, null, NaN
    console.log("A is greater or equal than 10");
}else{
    console.log("A is less than 10");
}

//console.log("Finished");

const hoy = new Date();
let dia = hoy.getDay();
console.log({dia});

if (dia === 0) {
    console.log("Sunday");
}else if(dia === 1){
    
    console.log("Monday");

    // if (dia === 1) {
    //     console.log("Monday");
    // }else{
    //     console.log("Another day of the week");
    // }
}else if(dia === 2){
    console.log("Tuesday");
}else{
    console.log("Another day of the week");
}

//SIn usar if Else, o Switch, unicamente objetos
dia = 3;

const diasLetras = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
}

const diasLetras2 = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// dia de la semana
console.log(diasLetras2[dia] || "Day not found");
