class Persons {
    constructor() {
        this.image = new Image()
        this.image.src = "./images/lucky.jpg"
        this.x = 20
        this.y = canvas.height / 2
        this.w = 100
        this.h = 100
        this.speed = 10

    }

    // pinta al personajeS
    drawPerson() {
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h) 
    }

    // movimiento persons
    moveUpPerson() {
        this.y -= 10
    }

    moveDownPerson() {
        this.y += 10
    }

    // colision con los otros personajes


}