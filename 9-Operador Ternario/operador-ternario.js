/*
Dia de semana se habre a alas 11,
Fines de semana abrimos a las 9

Entra a un sitio web, para consultar si esta abierto hoy..
 */

const dia = 1;
const horaActual = 10;

let horaApertura;
let mensaje;

// if(dia === 0 || dia === 6){
//     console.log('Fin de semana Abierto a las 9')
//     horaApertura = 9;
// }else{
//     console.log('dia semana');
//     horaApertura = 11;
// }

horaApertura = ([0,6].includes(dia)) ? 9 : 11;

// if(horaActual >= horaApertura){
//     mensaje = 'Esta abierto';
// }else{
//     mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`;
// }

mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Esta cerrado, hoy abrimos a las ${horaApertura}`;

console.log({horaApertura, mensaje});