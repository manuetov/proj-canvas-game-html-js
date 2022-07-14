class Projectiles {
   constructor(xParam, yParam){
      this.image = new Image()
      this.image.src = "./images/bullet.png"
      this.x = xParam
      this.y = yParam
      this.speed = 5
      this.w = 20
      this.h = 25

      this.radius = 3
   }

   drawProjectile() {
      ctx.drawImage(this.image, this.x, this.y, this.w, this.h)
   }

   projectileMove() {
      this.x += this.speed
   }

}