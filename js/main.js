// Main solo será para manejo de estados y manipulacion de DOM

// *** GLOBAL VARIABLES ***
let game //variable global de la clase Game{}

// seleccion de canvas y creación del contexto
const canvas = document.querySelector("#my-canvas")
const ctx = canvas.getContext('2d');

// elementos de DOM
const startScreenDOM = document.querySelector("#start-screen");
const startBtn = document.querySelector("#start-btn");


// *** FUNCTIONS startScreenDOM ***

// const gameLoop = () => {

// }

// inicia el juego.
const startGame = () => {
   // console.log('iniciando juego')
   startScreenDOM.style.display = 'none';
   canvas.style.display = "block"

   // Se crea un nuevo obj que instancia la clase Game{}
   game = new Game()

   // console.log(game)
   game.gameLoop() //invoco f. recursiva para iniciar el juego

}

// gameLoop() //invoca la función recursiva

// *** ADD EVENT LISTENERS ***

// eventListener al botón start para empezar el juego
startBtn.addEventListener('click', startGame)

// eventlistener para movimientos del personaje
window.addEventListener('keydown', ({key}) =>{
   if (key === "ArrowDown" && game.person.y + game.person.h < canvas.height){
      game.person.moveDownPerson()
      console.log('abajo')
   }
})

window.addEventListener('keydown', ({key}) =>{
   if (key === "ArrowUp" && game.person.y > 0) {
      game.person.moveUpPerson()
   }
})