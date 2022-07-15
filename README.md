# NAME OF YOUR PROYECT
Have a Lucky day!!


## [See the Game] https://manuetov.github.io/proj-canvas-game-html-js/
NOTE: above link will be added later

# Description

El juego está ambientado en el personaje de dibujos animados de Lucky Luke.

Para el background se ha usado una imagen del desierto en el lejano oeste.

# Main Functionalities

1. El personaje principal se mueve de arriba a abajo evitando colisionar con los Daltons que vienen hacia él
y disparandoles. Si colisiona con alguno. GAME OVER!!

2. Tiene que chocar con las abuelas para salvarlas y sumar puntos.

3. Conforme la puntuación aumente, aparecerán más enemigos, para aumentar el nivel de dificultad del juego.

# Backlog Functionalities

- List here the cool (but not essential) functionalities your game could have

# Proyect Structure

- List here the JS files 

enemies.js // class Enemies{} "Daltons"
friends.js // class Friends{} "Abuelina"
persons.js // class Persons{} "Lucky Luke"
projectiles.js  // class Projectiles{} "balas"

- One main.js to manage DOM elements,

*************************** main.js ****************************************

 // *** FUNCTIONS startScreenDOM ***

// inicia el juego.
startGame() 
  // Se instancia la clase Game{} donde reside la funcionalidad dle juego
   game = new Game()
  // inicia el musica del juego
  music.play()
  //invoco función recursiva para iniciar el juego
  game.gameLoop() 

// pausa el juego y lo reactiva
pauseGame() 

// *** ADD EVENT LISTENERS ***

// eventListener al botón start/restart para empezar el juego

// eventlistener para movimientos del personaje

window.addEventListener('keydown', ({key})
  
*************************** Game class  ****************************************

// todos los elementos que afectan a la funcionalidad del juego.

class Game {
  //propiedades
  constructor() {
      // background
      this.bg = new Image()
      this.bg.src = "./images/background-canvas.jpg"
      
      this.person = new Persons()
      
      this.enemy = new Enemies()
      
      this.friend = new Friends()
      
      this.enemyArr = []
      this.friendArr = []

      this.projectileArr = []
      this.isGameOn = true // variable para parar el juego (la recursión)

      this.isGamePause = false // para pausar el juego. 
      
      this.count = 0
      }
      
  // Métodos  
   
  // agrega enemigos al array aleatoriamente 
  addSecundaries()

  // añade bualas al array 
  addProjectile()
    // sonido disparo
    fire.play() 

  // colision de la bala con el enemy "Dalton"
  projectileCollisionEnemy()

  // colision de la bala con el friend "abuelina"
  projectileCollisionFriend()

  // colision del personaje principal con el enemigo
  enemyCollision()
    // invoca la función que termina el juego
    gameOver()

  // colision con la "abuelina"
  friendCollision() 

  // limpia array Enemies cuando los elementos salen del canvas 
  removeArrFriends()

  // efecto de gameover
  gameOver()

  // función recursiva donde se pintan, mueven y acciones de los elementos que interactuan en el canvas
  gameLoop()

# States and Transitions

index.html

//     <!-- START SCREEN -->
  id="start-screen" // div container
  id="start-btn">Start! // botón para iniciar el juego
  class="keyboard" // info teclas para jugar
  
  
//    <!-- GAME SCREEN -->
  id="my-canvas" // tamaño del canvas
  id="pause-btn">|| // botón para pausar el juego
  class="score">Score: id="scoreDOM">0  // marcador de puntos

// 

# Bonus Tasks (Optional)

Bonus 1: Que el personaje se mueva por toda la pantalla.

Bonus 2: Añadir más personajes “amigos o enemigos”

Bonus 3: Añadir efectos gráficos cuando hay colisiones.

Bonus 4: Mejorar gráficamente las pantallas de inicio y final.

Bonus 5: Añadir varios jugadores que compitan entre ellos


# Extra Links (The links can be added later when available)

### Trello
[Link](www.your-url-here.com)

### Slides
https://docs.google.com/presentation/d/1Yvrv-oIePmAXE4uBsMDuBSN7B2dRoaWWcvS996Ry9Hc/edit?usp=sharing
