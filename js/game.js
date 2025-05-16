let canvas;
let ctx;
let character = new Image();

function init() {
    canvas = document.getElementById('canvas');
    // getContext 2d object, canvas = ctx
    ctx = canvas.getContext('2d');
    // Copy Relative Path img\main-heroes\PNG\Knight\knight.png
    // .. übergeordneten ordner zugreifen
    character.src = '../img/main-heroes/PNG/Knight/knight.png';

    setTimeout(function () {
        ctx.drawImage(character, 20, 20, 50, 150); // koordinaten + breite + höhe
    }, 2000);

} 