
let juan = {nombre:'Juan'};
let ana = {...juan};
ana.nombre = 'Ana';
console.log({juan, ana});

const cambiaNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter);

console.log(peter, tony);

// Arreglos
const frutas = ['Manzan', 'Pera', 'Piña'];

const otrasFrutas = [...frutas];


otrasFrutas.push('Mango');
console.table({frutas, otrasFrutas});