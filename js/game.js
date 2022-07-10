// todos los elementos que afectan a la funcionalidad del juego.

let isGameOn = true // variable global para parar el juego (la recursión)
class Game {
   constructor() {
      // background
      this.bg = new Image()
      this.bg.src = "./images/background-canvas.jpg"

      this.person = new Persons()
   }

   gameLoop = () => {
      console.log('funcionando')
      // limpio canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // movimientos y acciones
 
      // pintado de elementos
      ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)
      this.person.drawPerson()

      // efecto de recursión
      if (isGameOn) 
         requestAnimationFrame(this.gameLoop)
      
   }

  

}