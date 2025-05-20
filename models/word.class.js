class World {
    //#region attributes

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
    //#endregion

    //#region konstruktor
    constructor(canvas) {
        this.ctx = canvas.getContext('2d'); // Zeichenfläche
        this.canvas = canvas;
        this.draw(); // World start
    }
    //#endregion

    //#region methode
    // World wird erstellt
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Bild löschen → kein Flackern
        // Objekte werden hinzugefügt
        this.addObjectsToMap(this.backgroundObjects);
        this.addToMap(this.char);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.tiles);


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
    //#endregion
}