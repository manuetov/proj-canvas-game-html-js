class Persons {
    constructor() {
        this.image = new Image()
        this.image.src = "./images/lucky-luke_1.jpg"
        this.x = 20
        this.y = canvas.height / 2
        this.w = 100
        this.h = canvas.height * 0.2
        this.speed = 5

    }

    // pinta al personajeS
    drawPerson() {
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h) 
    }

    // movimiento persons
    moveUpPerson() {
        this.y -= this.speed
    }

    moveDownPerson() {
        this.y += this.speed
    }

    // colision con los otros personajes


}