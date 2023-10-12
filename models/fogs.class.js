class FogsBig extends MovableObject {
    width = 250;
    height = 150;

    constructor() {
        super().loadImage('img/5_background/layers/fogs/fog.png');
        this.x = Math.random() * 800;
        this.y = -20 + Math.random() * 100;
        this.speed = 0.04 + Math.random() * 0.05;
        this.animate();
    }
    animate() {
        this.moveLeft();
    }
}

class FogsSmall extends MovableObject {
    width = 200;
    height = 100;
    constructor() {
        super().loadImage('img/5_background/layers/fogs/fog.png');
        this.x = Math.random() * 800;

        this.y = -20 + Math.random() * 150;
        this.speed = 0.06 + Math.random() * 0.05;
        this.animate();
    }
    animate() {
        this.moveLeft();
    }
}

