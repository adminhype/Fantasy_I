class Skeleton extends MovableObject { // < alle eigenschaften & methoden die mmovaableObject hat in skeleeton



    constructor() {
        super().loadImage('img/main-enemies/PNG/Skeleton/skeleton01_idle1.png');
        this.x = 200 + Math.random() * 500; //enemies werden random neu platziert 0 - 500 range
    }
}