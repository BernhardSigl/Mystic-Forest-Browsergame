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
    IMAGES_DEAD = [
        'img/2_enemies/Wild Zombie/dead/1.png',
        'img/2_enemies/Wild Zombie/dead/2.png',
        'img/2_enemies/Wild Zombie/dead/3.png',
        // 'img/2_enemies/Wild Zombie/dead/4.png',
        // 'img/2_enemies/Wild Zombie/dead/5.png',
    ];
    IMAGES_HURT = [
        'img/2_enemies/Wild Zombie/hurt/1.png',
        'img/2_enemies/Wild Zombie/hurt/2.png',
        'img/2_enemies/Wild Zombie/hurt/3.png',
        'img/2_enemies/Wild Zombie/hurt/4.png',
        'img/2_enemies/Wild Zombie/hurt/5.png',
    ];
    IMAGES_ATTACK = [
        'img/2_enemies/Wild Zombie/attack/1.png',
        'img/2_enemies/Wild Zombie/attack/2.png',
        'img/2_enemies/Wild Zombie/attack/3.png',
        'img/2_enemies/Wild Zombie/attack/4.png',
    ];
    constructor() {
        super().loadImage('img/2_enemies/Wild Zombie/walk/1.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ATTACK);
        this.x = 200 + Math.random() * 450;
        this.speed = 1.5 + Math.random() * 0.15;
        this.walking_sound = new Audio('audio/zombie_walk.wav');
        this.walking_sound.volume = 0.15;
        animateEnemy(this);
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
    IMAGES_DEAD = [
        'img/2_enemies/Zombie Man/dead/1.png',
        'img/2_enemies/Zombie Man/dead/2.png',
        'img/2_enemies/Zombie Man/dead/3.png',
        // 'img/2_enemies/Zombie Man/dead/4.png',
        // 'img/2_enemies/Zombie Man/dead/5.png',
    ];
    IMAGES_HURT = [
        'img/2_enemies/Zombie Man/hurt/1.png',
        'img/2_enemies/Zombie Man/hurt/2.png',
        'img/2_enemies/Zombie Man/hurt/3.png',
    ];
    IMAGES_ATTACK = [
        'img/2_enemies/Zombie Man/attack/1.png',
        'img/2_enemies/Zombie Man/attack/2.png',
        'img/2_enemies/Zombie Man/attack/3.png',
        'img/2_enemies/Zombie Man/attack/4.png',
        'img/2_enemies/Zombie Man/attack/5.png',
    ];

    constructor() {
        super().loadImage('img/2_enemies/Zombie Man/walk/1.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ATTACK);
        this.x = 200 + Math.random() * 450;
        this.speed = 2 + Math.random() * 0.15;
        this.walking_sound = new Audio('audio/zombie_walk.wav');
        this.walking_sound.volume = 0.15;
        animateEnemy(this);
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
    IMAGES_DEAD = [
        'img/2_enemies/Zombie Woman/dead/1.png',
        'img/2_enemies/Zombie Woman/dead/2.png',
        'img/2_enemies/Zombie Woman/dead/3.png',
        // 'img/2_enemies/Zombie Woman/dead/4.png',
        // 'img/2_enemies/Zombie Woman/dead/5.png',
    ];
    IMAGES_HURT = [
        'img/2_enemies/Zombie Woman/hurt/1.png',
        'img/2_enemies/Zombie Woman/hurt/2.png',
        'img/2_enemies/Zombie Woman/hurt/3.png',
        'img/2_enemies/Zombie Woman/hurt/4.png',
        'img/2_enemies/Zombie Woman/hurt/5.png',
    ];
    IMAGES_ATTACK = [
        'img/2_enemies/Zombie Woman/attack/1.png',
        'img/2_enemies/Zombie Woman/attack/2.png',
        'img/2_enemies/Zombie Woman/attack/3.png',
        'img/2_enemies/Zombie Woman/attack/4.png',
    ];

    constructor() {
        super().loadImage('img/2_enemies/Zombie Woman/walk/1.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ATTACK);
        this.x = 200 + Math.random() * 450;
        this.speed = 1.75 + Math.random() * 0.15;
        this.walking_sound = new Audio('audio/zombie_walk.wav');
        this.walking_sound.volume = 0.15;
        animateEnemy(this);
    }
}

function animateEnemy(o) {
    setInterval(() => {
        if (o.energyEnemy === 0) {
            o.playAnimation(o.IMAGES_DEAD);
            o.applyGravityDelay();
            setTimeout(() => {
                setInterval(() => {
                    o.y -= o.speedY;
                    o.speedY -= 0.5;
                }, 200);
            }, 500);
        }
        else if (o.energyEnemy !== 0 && !o.isColliding(world.character) || world.character.energyCharacter === 0) {
            o.playAnimation(o.IMAGES_WALK);
            // o.moveLeft();
            o.x -= o.speed;
            o.otherDirection = true;
        }
        else if (o.isColliding(world.character) && world.character.isAttacking === true) {
            o.playAnimation(o.IMAGES_HURT);
        }
        else if (o.isColliding(world.character) && world.character.isAttacking === false && world.character.energyCharacter !== 0) {
            o.playAnimation(o.IMAGES_ATTACK);
        }
    }, 150);
}
