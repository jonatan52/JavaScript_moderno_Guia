// Funciones: Las funciones son bloques de código que solucionan un problema 
// específico para ser reutilizados. Existen dos tipos de funciones: declarativas y expresivas.

function saludar(nombre){
    console.log("Hola " + nombre)
}

saludar("Jonatan");

// // Funcion anomnima
// const saludar2 = function(){
//     console.log("hola mundo")
// }

//Funciones de flecha
const saluda3 = () => {
    console.log("Hola flecha")
}
saluda3();

const saluda4 = (nombre) => {
    console.log("Hola " + nombre)
}
saluda4("Yesenia");