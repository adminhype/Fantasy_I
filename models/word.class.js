class World {
    //Spielfigur
    char = new Character();
    //Gegner
    enemies = [
        new Skeleton(),
        new Skeleton(),
        new Skeleton(),
    ];
    //Boden-Elemente
    tiles = [
        new Tile(),
        new Tile(),
        new Tile()
    ];
    //Hintergrund
    backgroundObjects = [
        new BackgroundObject(`img/main-world/PNG/Background/Bright/Background.png`, 0, 0)
    ];
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d'); // Zeichenfläche
        this.canvas = canvas;
        this.draw(); // World start
    }

    // World wird erstellt
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Bild löschen → kein Flackern
        // Objekte werden hinzugefügt
        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.tiles);
        this.addObjectsToMap(this.enemies);
        this.addToMap(this.char);

        // Schleife mit x fps
        self = this;
        requestAnimationFrame(() => {
            self.draw();
        });
    }
    // Alle Objekte zeichen
    addObjectsToMap(obj) {
        obj.forEach(o => {
            this.addToMap(o);
        })
    }
    //Objekt zeichnen
    addToMap(mObject) {
        this.ctx.drawImage(mObject.img, mObject.x, mObject.y, mObject.width, mObject.height);
    }
}