class World {

    char = new Character();
    enemies = [
        new Skeleton(),
        new Skeleton(),
        new Skeleton(),
    ];
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.draw();
    }


    draw() {
        this.ctx.drawImage(this.char.img, this.char.x, this.char.y, this.char.height, this.char.width) // alle variablen z.b aus world mit this öffnen 
    }
}