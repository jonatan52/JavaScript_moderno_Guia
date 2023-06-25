// nota: sin usuar if else o switch unicamente objetos
// imprimir los dias de las semanas con su numero respectivo
const hoy = new Date();
let dia = hoy.getDay();
let diaSemana = {
                 0:"Domingo",
                 1:'Lunes',
                 2:'Martes',
                 3:'Miercoles',
                 4:'jueves',
                 5:'Viernes',
                 6:'Sabado' };               

console.log('Dia ',dia, diaSemana[dia]);

let diaSemana2 = ["Domingo",'Lunes','Martes','Miercoles','jueves','Viernes','Sabado']; 

console.log(diaSemana2[1]);    