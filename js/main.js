// Main solo será para manejo de estados y manipulacion de DOM
// *** GLOBAL VARIABLES ***

// seleccion de canvas y creación del contexto
const canvas = document.querySelector("#my-canvas")
const ctx = canvas.getContext('2d');

// elementos de DOM
const startScreenDOM = document.querySelector("#start-screen");
const startBtn = document.querySelector("#start-btn");


// *** FUNCTIONS startScreenDOM ***


const gameLoop = () => {

}

// inicia el juego.
const startGame = () => {
   console.log('iniciando juego')
   startScreenDOM.style.display = 'none';
   canvas.style.display = "block"

   // Se crea un nuevo obj de la clase Game{}
   const game = new Game()
   console.log(game)

}

gameLoop() //invoca la función recursiva

// *** ADD EVENT LISTENERS ***

startBtn.addEventListener('click', startGame)

