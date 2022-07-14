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
      
      this.count = 0

      this.music = true
   }
   
   // agrego enemigos al array
   addSecundaries = () => {

      let random = parseInt(Math.random() * ((canvas.height - canvas.height * 0.15 -5) - 5) +  5)
      let random1 = parseInt(Math.random() * ((canvas.height - canvas.height * 0.15 -5) - 5) +  5)
      
      if (this.enemyArr.length === 0 || this.enemyArr[this.enemyArr.length - 1].x < canvas.width/2){
         if ((random1 - random) < 100 || (random1 - random) > canvas.height) { random1 = random - this.person.h }
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
      fire.play()  
   }

   // colision bala enemy
   projectileCollisionEnemy = () => {
      this.enemyArr.forEach((eachEnemy, i) => {
         this.projectileArr.forEach((eachProyectile, j) => {
            if (eachEnemy.x < eachProyectile.x + eachProyectile.w &&
               eachEnemy.x + eachEnemy.w > eachProyectile.x &&
               eachEnemy.y < eachProyectile.y + eachProyectile.h &&
               eachEnemy.h + eachEnemy.y > eachProyectile.y) {
                // ¡colision detectada!
               this.enemyArr.splice(i, 1)
               this.projectileArr.splice(j, 1)
               this.count +=5
               score.innerHTML = Number(this.count)
               maleScream.play()
               // console.log(`CONTADOR = ${this.count}`)
         }
      })  
   })   
   }

     // colision bala friend
     projectileCollisionFriend = () => {
      this.friendArr.forEach((eachFriend, i) => {
         this.projectileArr.forEach((eachProyectile, j) => {
            if (eachFriend.x < eachProyectile.x + eachProyectile.w &&
               eachFriend.x + eachFriend.w > eachProyectile.x &&
               eachFriend.y < eachProyectile.y + eachProyectile.h &&
               eachFriend.h + eachFriend.y > eachProyectile.y) {
                // ¡colision detectada!
               this.friendArr.splice(i, 1)
               this.projectileArr.splice(j, 1)
               this.count -=5
               score.innerHTML = Number(this.count)
               ahhh.play()
               // console.log(`CONTADOR = ${this.count}`)
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
            // console.log('ENEMY - COLISIÓN ')
            punch.play()
            this.isGameOn = false
            this.music = false
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
            this.friendArr.splice(i, 1) // elimino el elemento objeto del array
            this.count +=2
            score.innerHTML = Number(this.count)
            granMa.play()
            // console.log(`CONTADOR = ${this.count}`)
         }
      })   
   }

   // limpio array Enemies cuando los elementos salen del canvas 
   removeArrEnemies = () => {
      // console.log(this.enemyArr.length)
      if (this.friendArr < 0 && this.friendArr[0].x + this.friendArr[0].w < 0) {
         this.enemyArr.shift()
         this.count -=3
         score.innerHTML = Number(this.count)
         loseDal.play()
      }
   }
   
   // limpio array Friends cuando los elementos salen del canvas 
   removeArrFriends = () => {
      // console.log(this.friendArr.length)
      if (this.friendArr < 0 && this.friendArr[0].x + this.friendArr[0].w < 0) {
         this.friendArr.shift()
         this.count -=3
         score.innerHTML = Number(this.count) 
         console.log(score.innerHTML)
         loseAbu.play()
      }
   }
   
   // efecto de gameover
   gameOver = () => {
      this.isGameOn = false;
      canvas.style.display = "none"
      gameOverScreen.style.display = "flex"
      pauseBtn.style.display= "none"     
 }

   gameLoop = () => {
      // limpio canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      music.play()

      // PINTADO DE ELEMENTOS
      ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height)
      // pinto personaje principal
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

      // MOVIMIENTOS Y ACCIONES
      // añado personajes al array de personjes secundarios
      this.addSecundaries()

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
      this.projectileCollisionEnemy()
      this.projectileCollisionFriend()

      // limpio array cuando los elementos salen del canvas 
      this.removeArrEnemies()
      this.removeArrFriends()

      // efecto de recursión. todo el funcionamiento del juego lo controlamos desde aquí.
      if (this.isGameOn && this.music && this.isGamePause === false) 
         requestAnimationFrame(this.gameLoop)
   }

  

}