class FogsBig extends MovableObject {
    /**
     * The width and height of the fog object.
     */
    width = 250;
    height = 150;

    /**
    * Create a fog object.
    */
    constructor() {
        super().loadImage('img/5_background/layers/fogs/fog.png');
        this.x = Math.random() * 3000;
        this.y = -30 + Math.random() * 50;
        this.speed = 0.04 + Math.random() * 0.05;
        animate(this);
    }
}

class FogsSmall extends MovableObject {
    /**
     * The width and height of the fog object.
     */
    width = 200;
    height = 100;

    /**
    * Create a fog object.
    */
    constructor() {
        super().loadImage('img/5_background/layers/fogs/fog.png');
        this.x = Math.random() * 3000;
        this.y = -30 + Math.random() * 60;
        this.speed = 0.06 + Math.random() * 0.05;
        animate(this);
    }
}

/**
 * Animates the movement of an object to the left.
 * @param {MovableObject} o - "this" operator.
 */
function animate(o) {
    setInterval(() => {
        o.moveLeft();
        o.x -= o.speed;
    }, 16);
}

