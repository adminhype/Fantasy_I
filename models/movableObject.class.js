// Vorlage 
class MovableObject {
    x = 120;
    y = 300;
    img;
    height = 150;
    width = 100;

    //loadImage('img/test.png');
    loadImage(path) {
        this.img = new Image(); // same as this.img = document.getelementbyid('image')<img id="image" src>
        this.img.src = path;
    }

    moveRight() {
        console.log('Moving-right');
    }
    moveLeft() {

    }
}