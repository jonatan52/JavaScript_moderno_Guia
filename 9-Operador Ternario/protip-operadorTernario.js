const elmayor = (a,b) => (a > b) ? a : b;
    //return(a > b) ? a : b;

const menbresia = (miembro) => (miembro)? '2 dolares' : '10 dolares';

console.log(elmayor(10,15));

console.log(menbresia(true));

// --------------------------------------

const nota = 82.5;
const grado = nota >= 95 ? 'A+':
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+':
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C+' : 'C';
console.log({nota, grado});