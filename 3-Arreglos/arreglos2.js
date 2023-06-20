let juegos = ['Zelda', 'Mario', 'Metroid', 'Crono'];
console.log('largo: ', juegos.length);// largo del array

juegos.forEach((elemento, indice, arr)=>{
    console.log({elemento, indice, arr});
})

let nuevaLongitud = juegos.push('F-Zero');// push agrega un nuevo elemento al final
console.log({nuevaLongitud, juegos});

nuevaLongitud = juegos.unshift('Fire Emblem');// unshift  agrega un nuevo elemento al principio
console.log({nuevaLongitud, juegos});

let juegoBorrado = juegos.pop('Fire Emblem');// pop  elimina el ultimo elemento
console.log({juegoBorrado, juegos});
console.log('longitud', juegos.length)

let pos = 1;
console.log(juegos);
let juegoBorrados = juegos.splice(pos, 2);
console.log({juegoBorrados, juegos});

