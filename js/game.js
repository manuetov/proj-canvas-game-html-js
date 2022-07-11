// todos los elementos que afectan a la funcionalidad del juego.

let isGameOn = true // variable global para parar el juego (la recursión)
class Game {
   constructor() {
      // background
      this.bg = new Image()
      this.bg.src = "./images/background-canvas.jpg"

      this.person = new Persons()

      this.enemy = new Enemies()

      this.enemyArr = []
   }
   
   // agrego enemigos al array
   addEnemies = () => {
      if (this.enemyArr.length === 0 || this.enemyArr[this.enemyArr.length - 1].x < canvas.width/2){
         // let enemy = new Enemies()
         let enemySizeDistance = this.enemy.h + 100
         let enemy = new Enemies(enemySizeDistance)
         this.enemyArr.push(enemy)
      }
   }

   gameLoop = () => {
      console.log('funcionando')
      // limpio canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // pintado de elementos
      ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)
      this.person.drawPerson()
      // this.enemy.drawEnemy()
      this.enemyArr.forEach((eachEnemy) => {
         eachEnemy.drawEnemy()
      })

      // movimientos y acciones
      this.addEnemies()
      // this.enemy.enemyMove()
      this.enemyArr.forEach((eachEnemy) => {
         eachEnemy.enemyMove()
      })


      // efecto de recursión
      if (isGameOn) 
         requestAnimationFrame(this.gameLoop)
      
   }

  

}