// Main solo será para manejo de estados y manipulacion de DOM

// *** GLOBAL VARIABLES ***
let game //variable global de la clase Game{}
let fire = new Audio()
fire.src ="./sounds/gunshot.mp3"
let ahhh = new Audio()
ahhh.src ="./sounds/ahhhh-abuelina.wav"
let loseAbu = new Audio()
loseAbu.src ="./sounds/lose_abuelina.wav"
let granMa = new Audio()
granMa.src = 'https://assets.codepen.io/21542/howler-sfx-levelup.mp3'
let maleScream = new Audio()
maleScream.src = './sounds/male-scream-2.wav'
let punch = new Audio()
punch.src ="./sounds/dalton-punch.wav"
let loseDal = new Audio()
loseDal.src = "./sounds/lose_dalton.wav"
let music = new Audio()
music.src = "./sounds/honky-tonk-piano-ragtime-melody.wav"


// efectos de sonido
// let sfx = {
//    fire: new Howl({
//       src: '/sounds/gunshot.wav'
//    }),
//    granMa: new Howl({
//       src: 'https://assets.codepen.io/21542/howler-sfx-levelup.mp3'
//    }),
//    ahhh: new Howl({
//       src: '/sounds/ahhhh-abuelina.wav'
//    }),
//    maleSream: new Howl({
//       src: '/sounds/male-scream-2.wav'
//    }),
//    loseAbu: new Howl({
//       src: '/sounds/lose_abuelina.wav'
//    }),
//    loseDal: new Howl({
//       src: '/sounds/lose_dalton.wav'
//    }),
//    punch: new Howl({
//       src: '/sounds/dalton-punch.wav'
//    })
// }

// seleccion de canvas y creación del contexto
const canvas = document.querySelector("#my-canvas")
const ctx = canvas.getContext('2d');


// elementos de DOM
const startScreen = document.querySelector("#start-screen");
const startBtn = document.querySelector("#start-btn");
const gameOverScreen = document.querySelector("#gameover-screen")
const restartBtn = document.querySelector("#restart-btn")
const pauseBtn = document.querySelector("#pause-btn")
const score = document.querySelector("#scoreDOM")



// *** FUNCTIONS startScreenDOM ***

// inicia el juego.
const startGame = () => {
   // console.log('iniciando juego')
   startScreen.style.display = "none";
   gameOverScreen.style.display = "none"
   canvas.style.display = "block"
   pauseBtn.style.display = "block"
   score.style.display = "block"
 
   
   // Se crea un nuevo obj que instancia la clase Game{}
   game = new Game()


   // console.log(game)
   game.gameLoop() //invoco f. recursiva para iniciar el juego

}

// pausa el juego y lo reactiva
const pauseGame = () => {
   if (!game.isGamePause){
      game.isGamePause = true
   } else {
      game.isGamePause = false
      game.gameLoop()
   }
}

// *** ADD EVENT LISTENERS ***

// eventListener al botón start/restart para empezar el juego
startBtn.addEventListener('click', startGame)
restartBtn.addEventListener('click', startGame)
pauseBtn.addEventListener('click', pauseGame)

// eventlistener para movimientos del personaje

window.addEventListener('keydown', ({key}) =>{
   switch (key){
      case "ArrowDown":
         if (game.person.y + game.person.h < canvas.height){
            game.person.moveDownPerson()
         }
         break
      case "ArrowUp":
         if (game.person.y > 0) {
            game.person.moveUpPerson()
         }
         break
      case "Control":
         game.addProjectile()
         fire.play()  
         break
   }
})


// window.addEventListener('keydown', ({key}) =>{
//    if (key === "ArrowDown" && game.person.y + game.person.h < canvas.height){
//       game.person.moveDownPerson()
//    }
// })

// window.addEventListener('keydown', ({key}) =>{
//    if (key === "ArrowUp" && game.person.y > 0) {
//       game.person.moveUpPerson()
//    }
// })

// window.addEventListener('keydown', ({key}) =>{
//    if (key === "Control" ){
      
//       game.addProjectile()
//       sfx.fire.play()
//       // game.projectile.projectileMove()
//    }
// })