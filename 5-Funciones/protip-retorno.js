function crearPersona(nombre, apellido){
    return{nombre, apellido}
}

const persona = crearPersona('Jonatan ', 'Tarriba');
console.log(persona);

function imprimirArgumentos(){
    console.log(arguments);
}

const imprimirArgumentos2 = (edad, ...args)=>{
    return args;
}

const [casado, vivo, nombre, saludo] = imprimirArgumentos2(10, true, false, 'Fernando', 'Hola');
console.log({casado, vivo, nombre, saludo});

let personajes = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulbuster'],
    
};
