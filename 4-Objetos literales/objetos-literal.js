let personajes = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coord:{
        lat: 34.034,
        ing: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulbuster'],
    direccion:{
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    }
};

console.log( personajes);
console.log('Nombre', personajes.nombre);
console.log('Nombre', personajes['nombre']);
console.log('Edad', personajes.edad);

console.log('Coord', personajes.coord);
console.log('Latitud', personajes.lat);

console.log('No Trajes', personajes.trajes.length);

const entriesPares = Object.entries(personajes);
console.log(entriesPares);

Object.freeze(personajes);

personajes.dinero = 1000000;
personajes.casado = false;
personajes.direccion.ubicacion = 'Costa Rica';
console.log(personajes);

const propiedades = Object.getOwnPropertyNames(personajes);
const valores = Object.values(personajes)
console.log(propiedades, valores);