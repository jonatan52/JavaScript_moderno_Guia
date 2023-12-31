/*
2C = Two of Clubs
2D = Two of Diamonds
2H = Two of Hearts
2S = Two of Spades
 */

let deck = [];
const tipos = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// referencia del html
const btnPedir = document.querySelector('#btnPedir');



const crearDeck = () =>{
    for(let i=2; i<=10; i++){
        for(let tipo of tipos){
            deck.push(i + tipo);
        }

    }
     
    for(let tipo of tipos){
        for(let esp of especiales){
            deck.push(esp + tipo)
        }

    }

    // console.log(deck);
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;
}

crearDeck();

// esta funcion me permite tomar una nueva carta
const pedirCarta = () =>{
    if (deck.length === 0){
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
} 

// valor carta
const valorCarta = (carta) =>{
    const valor = carta.substring(0, carta.length - 1);
    return (isNaN(valor)) ?
           (valor === 'A') ? 11 : 10
           : valor * 1;

}

// Eventos
btnPedir.addEventListener('click', () =>{
    carta = pedirCarta();
    console.log(carta);
});