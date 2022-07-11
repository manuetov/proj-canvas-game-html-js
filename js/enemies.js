class Enemies {
   constructor(yParam) {
      this.image = new Image()
      this.image.src = "./images/dalton.gif"
      this.x = canvas.width 
      this.y = yParam
      this.w = 100
      this.h = canvas.height * 0.2
      this.speed = 3

  }

  // pinta al personajeS
  drawEnemy() {
   ctx.drawImage(this.image, this.x, this.y, this.w, this.h) 
  }

  enemyMove() {
   this.x -= this.speed
  }


}