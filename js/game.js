// todos los elementos que afectan a la funcionalidad del juego.

class Game {
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

      this.counter = 0
   }
   
   // agrego enemigos al array
   addSecundaries = () => {

      let random = parseInt(Math.random() * ((canvas.height - canvas.height * 0.15 -5) - 5) +  5)
      let random1 = parseInt(Math.random() * ((canvas.height - canvas.height * 0.15 -5) - 5) +  5)
      
      if (this.enemyArr.length === 0 || this.enemyArr[this.enemyArr.length - 1].x < canvas.width/2){
         if ((random1 - random) < 100 || (random1 - random) > canvas.height) { random1 = random + this.person.h }
         // if ((random - random1) < 100) { random = random1 + this.person.h }

      let enemy = new Enemies(random , "./images/dalton.gif")
      this.enemyArr.push(enemy)
      
      // let enemy1 = new Enemies(random + persoPlusDistance * 2, "./images/dalton.gif")
      // this.enemyArr.push(enemy1)

      let friend = new Friends(random1 , "./images/abuelina.png")
      this.friendArr.push(friend)
      }   
      

   }

   addProjectile = () => {
      let projectile = new Projectiles(this.person.x, this.person.y)
      this.projectileArr.push(projectile)
   }

   projectileCollision = () => {
      this.enemyArr.forEach((eachEnemy, i) => {
         this.projectileArr.forEach((eachProyectile, j) => {
            if (eachEnemy.x < eachProyectile.x + eachProyectile.w &&
               eachEnemy.x + eachEnemy.w > eachProyectile.x &&
               eachEnemy.y < eachProyectile.y + eachProyectile.h &&
               eachEnemy.h + eachEnemy.y > eachProyectile.y) {
                // ¡colision detectada!
               console.log('BULLET - COLISIÓN ')
               this.enemyArr.splice(i, 1)
               this.projectileArr.splice(j, 1)
               this.counter++
               console.log(`CONTADOR = ${this.counter}`)
            
         }
      })  
   })   
   }

   enemyCollision = () => {
      this.enemyArr.forEach((eachEnemy) => {
         if (eachEnemy.x < this.person.x + this.person.w &&
            eachEnemy.x + eachEnemy.w > this.person.x &&
            eachEnemy.y < this.person.y + this.person.h &&
            eachEnemy.h + eachEnemy.y > this.person.y) {
             // ¡colision detectada!
            // console.log('ENEMY - COLISIÓN ')
            this.isGameOn = false
            this.gameOver()
         }
      })   
   }

   friendCollision = () => {
      this.friendArr.forEach((eachFriend, i) => {
         if (eachFriend.x < this.person.x + this.person.w &&
            eachFriend.x + eachFriend.w > this.person.x &&
            eachFriend.y < this.person.y + this.person.h &&
            eachFriend.h + eachFriend.y > this.person.y) {
            // ¡colision detectada!
            //  console.log('FRIEND - COLISIÓN')
            this.friendArr.splice(i, 1)
            // this.isGameOn = true      
            this.counter++
            console.log(`CONTADOR = ${this.counter}`)
            // eachFriend.style.display = "none"
         }
      })   
   }

   // limpio array cuando los elementos salen del canvas 
   removeArrPersons = () => {
      console.log(this.enemyArr.length)
      if (this.enemyArr[0].x + this.enemyArr[0].w < 0 && this.friendArr[0].x + this.friendArr[0].w < 0) {
         this.enemyArr.shift()
         this.friendArr.shift()
      }
   }
   

   // efecto de gameover
   gameOver = () => {
      this.isGameOn = false;
      canvas.style.display = "none"
      gameOverScreen.style.display = "flex"
 }

   gameLoop = () => {
      // console.log('funcionando')
      // limpio canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // pintado de elementos
      ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)
      this.person.drawPerson()

      // this.enemy.drawEnemy()
      this.enemyArr.forEach((eachEnemy) => {
         eachEnemy.drawEnemy()
      })

      // this.friend.drawEnemy()
      this.friendArr.forEach((eachFriend) => {
         eachFriend.drawFriend()
      })
      this.projectileArr.forEach((eachProjectile) => {
         eachProjectile.drawProjectile()   
      })


      // movimientos y acciones
      this.addSecundaries()
      // this.enemy.enemyMove()
      this.enemyArr.forEach((eachEnemy) => {
         eachEnemy.enemyMove()
      })

      this.friendArr.forEach((eachFriend) => {
         eachFriend.friendMove()
      })

      this.projectileArr.forEach((eachProjectile) => {
         eachProjectile.projectileMove()
      })
      
      this.enemyCollision()
      this.friendCollision()
      this.projectileCollision()

      // limpio array cuando los elementos salen del canvas 
      this.removeArrPersons()

      // efecto de recursión. todo el funcionamiento del juego lo controlamos desde aquí.
      if (this.isGameOn && this.isGamePause === false) 
         requestAnimationFrame(this.gameLoop)
      
   }

  

}