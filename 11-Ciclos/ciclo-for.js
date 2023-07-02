// ciclo for
console.warn('for');

const heroes = ['Batman', 'Superman', 'Mujer Maravilla','Aquaman'];

for(let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
}


console.warn('for in');
for(let i in heroes){
    console.log(heroes[i])
}

console.warn('for of');
for(let heroe of heroes){
    console.log(heroe);
}