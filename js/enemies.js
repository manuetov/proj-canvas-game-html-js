class Enemies {
   constructor(xParam, yParam, srcParam) {
      this.image = new Image()
      this.image.src = srcParam
      this.x = xParam 
      this.y = yParam
      this.w = 80
      this.h = canvas.height * 0.15
      this.speed = 2
  }

  // pinta al personajeS
  drawEnemy() {
   ctx.drawImage(this.image, this.x, this.y, this.w, this.h) 
  }

  enemyMove() {
   this.x -= this.speed
  }

}