class Endboss extends MovableObject {
    x = 100;
    y = 240;
    width = 80;
    height = 180;
    IMAGES_IDLE = [
        'img/2_enemies/Zombie Man/idle/1.png',
        'img/2_enemies/Zombie Man/idle/2.png',
        'img/2_enemies/Zombie Man/idle/3.png',
        'img/2_enemies/Zombie Man/idle/4.png',
        'img/2_enemies/Zombie Man/idle/5.png',
        'img/2_enemies/Zombie Man/idle/6.png',
        'img/2_enemies/Zombie Man/idle/7.png',
        'img/2_enemies/Zombie Man/idle/8.png',
        'img/2_enemies/Zombie Man/idle/9.png',
        'img/2_enemies/Zombie Man/idle/10.png',
        'img/2_enemies/Zombie Man/idle/11.png',
    ];
    IMAGES_RUN = [
        'img/2_enemies/Zombie Man/run/1.png',
        'img/2_enemies/Zombie Man/run/2.png',
        'img/2_enemies/Zombie Man/run/3.png',
        'img/2_enemies/Zombie Man/run/4.png',
        'img/2_enemies/Zombie Man/run/5.png',
        'img/2_enemies/Zombie Man/run/6.png',
        'img/2_enemies/Zombie Man/run/7.png',
    ];

    constructor() {
        super().loadImage('img/2_enemies/Zombie Man/idle/1.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_RUN);
        this.x = 600; // 2225
        this.speed = 11 + Math.random() * 2;
        // this.walking_sound = new Audio('audio/zombie_walk.wav');
        // this.walking_sound.volume = 0.15;
        animateEndboss(this);
    }
}

function animateEndboss(o) {
    o.moveLeft();
    setInterval(() => {
        if (o.energyEndboss < 100 && o.energyEndboss >= 80 && o.x <= 620 && o.x >= 150) {
            o.playAnimation(o.IMAGES_RUN);
            o.moveLeft();
            if (o.x <= 160 && o.x >= 130) { // console.log(world.level.enemies
                o.otherDirection = false;
            }

        } else if (o.energyEndboss < 80 && o.energyEndboss >= 60 && o.x <= 630 && o.x >= 140) {
            o.playAnimation(o.IMAGES_RUN);
            o.moveRight();
            if (o.x <= 640 && o.x >= 590) {
                o.otherDirection = true;
            }
        } else if (o.energyEndboss < 60 && o.energyEndboss >= 40 && o.x <= 640 && o.x >= 130) {
            o.playAnimation(o.IMAGES_RUN);
            o.moveLeft();
            if (o.x <= 160 && o.x >= 120) {
                o.otherDirection = false;
            }
        } else if (o.energyEndboss < 40 && o.energyEndboss >= 20 && o.x <= 650 && o.x >= 120) {
            o.playAnimation(o.IMAGES_RUN);
            o.moveRight();
            if (o.x <= 660 && o.x >= 650) {
                o.otherDirection = true;
            }
        }
        else
            o.playAnimation(o.IMAGES_IDLE);
        // console.log(`live: `, o.energyEndboss);
        // console.log(`x: `, o.x);
    }, 100);
}
