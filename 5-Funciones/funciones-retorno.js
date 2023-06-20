// Funciones: Las funciones son bloques de código que solucionan un problema 
// específico para ser reutilizados. Existen dos tipos de funciones: declarativas y expresivas.

function sumar(a,b){
    return a + b;
}

console.log(1+3)

//Funciones en una sola linea
const sumar2 = (a,b) => a + b;
console.log(sumar2(2,2));

function getAleatorio(){
    return Math.random();
}
console.log(getAleatorio());

const getAleatorio2 = () => Math.random();
console.log(getAleatorio2())