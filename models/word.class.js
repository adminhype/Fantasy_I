class World {

    char = new Character();
    enemies = [
        new Skeleton(),
        new Skeleton(),
        new Skeleton(),
    ];
    tiles = [
        new Tile(),
        new Tile(),
        new Tile()
    ];
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }

    // draw wird immer wieder aufgerufen
    draw() {
        self = this;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.drawImage(this.char.img, this.char.x, this.char.y, this.char.height, this.char.width) // alle variablen z.b aus world mit this öffnen 
        this.enemies.forEach((enemy) => {
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        });

        this.tiles.forEach((tile) => {
            this.ctx.drawImage(tile.img, tile.x, tile.y, tile.width, tile.height);
        });

        requestAnimationFrame(() => {
            self.draw();
        });
    }
}