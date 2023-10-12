class Endboss extends MovableObject {
    x = 100;
    y = 240;
    width = 80;
    height = 180;
    IMAGES_WALK = [
        'img/2_enemies/Zombie Man/walk/3.png',
        'img/2_enemies/Zombie Man/walk/4.png',
        'img/2_enemies/Zombie Man/walk/5.png',
        'img/2_enemies/Zombie Man/walk/8.png',
    ];

    constructor() {
        super().loadImage('img/2_enemies/Zombie Man/walk/3.png');
        this.loadImages(this.IMAGES_WALK);
        this.x = 700;
        this.speed = 0.02 + Math.random() * 0.15;
        this.walking_sound = new Audio('audio/zombie_walk.wav');
        this.walking_sound.volume = 0.15;
        this.animate();
    }

    animate() {
        this.moveLeft();
        setInterval(() => {
            this.walking_sound.play();
            this.playAnimation(this.IMAGES_WALK);
        }, 425);
    }
}