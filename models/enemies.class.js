class WildZombie extends MovableObject {
    x = 100;
    y = 348;
    width = 90;
    height = 65;
    IMAGES_WALK = [
        'img/2_enemies/Wild Zombie/walk/1.png',
        'img/2_enemies/Wild Zombie/walk/2.png',
        'img/2_enemies/Wild Zombie/walk/5.png',
        'img/2_enemies/Wild Zombie/walk/6.png',
        'img/2_enemies/Wild Zombie/walk/7.png',
        'img/2_enemies/Wild Zombie/walk/10.png',
    ];

    constructor() {
        super().loadImage('img/2_enemies/Wild Zombie/walk/1.png');
        this.loadImages(this.IMAGES_WALK);
        this.x = 200 + Math.random() * 450;
        this.speed = 0.02 + Math.random() * 0.15;
        this.walking_sound = new Audio('audio/zombie_walk.wav');
        this.walking_sound.volume = 0.15;
        this.animate();
    }

    animate() {
        this.moveLeft();
        setInterval(() => {
            this.x -= this.speed;
            this.otherDirection = true;
        });
        setInterval(() => {
            this.walking_sound.play();
            this.playAnimation(this.IMAGES_WALK);
        }, 425);
    }
}

class ManZombie extends MovableObject {
    x = 100;
    y = 302;
    width = 60;
    height = 112;
    IMAGES_WALK = [
        'img/2_enemies/Zombie Man/walk/3.png',
        'img/2_enemies/Zombie Man/walk/4.png',
        'img/2_enemies/Zombie Man/walk/5.png',
        'img/2_enemies/Zombie Man/walk/8.png',
    ];

    constructor() {
        super().loadImage('img/2_enemies/Zombie Man/walk/1.png');
        this.loadImages(this.IMAGES_WALK);
        this.x = 200 + Math.random() * 450;
        this.speed = 0.06 + Math.random() * 0.15;
        this.walking_sound = new Audio('audio/zombie_walk.wav');
        this.walking_sound.volume = 0.15;
        this.animate();
    }

    animate() {
        this.moveLeft();
        setInterval(() => {
            this.x -= this.speed;
            this.otherDirection = true;
        });
        setInterval(() => {
            this.walking_sound.play();
            this.playAnimation(this.IMAGES_WALK);
        }, 425);
    }
}

class WomanZombie extends MovableObject {
    x = 105;
    y = 311;
    width = 65;
    height = 100;
    IMAGES_WALK = [
        'img/2_enemies/Zombie Woman/walk/1.png',
        'img/2_enemies/Zombie Woman/walk/2.png',
        'img/2_enemies/Zombie Woman/walk/3.png',
        'img/2_enemies/Zombie Woman/walk/4.png',
        'img/2_enemies/Zombie Woman/walk/5.png',
        'img/2_enemies/Zombie Woman/walk/6.png',
        'img/2_enemies/Zombie Woman/walk/7.png',
    ];

    constructor() {
        super().loadImage('img/2_enemies/Zombie Woman/walk/1.png');
        this.loadImages(this.IMAGES_WALK);
        this.x = 200 + Math.random() * 450;
        this.speed = 0.04 + Math.random() * 0.15;
        this.walking_sound = new Audio('audio/zombie_walk.wav');
        this.walking_sound.volume = 0.15;
        this.animate();
    }

    animate() {
        this.moveLeft();
        setInterval(() => {
            this.x -= this.speed;
            this.otherDirection = true;
        });
        setInterval(() => {
            this.walking_sound.play();
            this.playAnimation(this.IMAGES_WALK);
        }, 425);
    }
}
