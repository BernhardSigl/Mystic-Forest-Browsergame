// class WildZombie extends MovableObject {
//     x = 100;
//     y = 348;
//     width = 90;
//     height = 65;
//     IMAGES_WALK = [
//         'img/2_enemies/Wild Zombie/walk/1.png',
//         'img/2_enemies/Wild Zombie/walk/2.png',
//         'img/2_enemies/Wild Zombie/walk/5.png',
//         'img/2_enemies/Wild Zombie/walk/6.png',
//         'img/2_enemies/Wild Zombie/walk/7.png',
//         'img/2_enemies/Wild Zombie/walk/10.png',
//     ];

//     constructor() {
//         super().loadImage('img/2_enemies/Wild Zombie/walk/1.png');
//         this.loadImages(this.IMAGES_WALK);
//         this.x = 200 + Math.random() * 450;
//         this.speed = 0.02 + Math.random() * 0.15;
//         this.walking_sound = new Audio('audio/zombie_walk.wav');
//         this.walking_sound.volume = 0.15;
//         // animateEnemies(this);
//     }
// }

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
        'img/2_enemies/Zombie Man/dead/4.png',
        'img/2_enemies/Zombie Man/dead/5.png',
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
        this.animate();
    }

    animate() {
        setInterval(() => {
            if (this.energyManZombie === 0) {
                this.playAnimation(this.IMAGES_DEAD);
                this.applyGravityDelay();
            }
            else if ((this.energyManZombie !== 0 && !this.isColliding(world.character) || world.character.energyCharacter === 0)) {
                this.playAnimation(this.IMAGES_WALK);
                this.moveLeft();
                this.x -= this.speed;
                this.otherDirection = true;
            }
            else if (this.isColliding(world.character) && world.character.isAttacking === true) {
                this.playAnimation(this.IMAGES_HURT);
            }
            else if (this.isColliding(world.character) && world.character.isAttacking === false && world.character.energyCharacter !== 0) {
                this.playAnimation(this.IMAGES_ATTACK);
            }
        }, 300);
    }
}

// class WomanZombie extends MovableObject {
//     x = 105;
//     y = 311;
//     width = 65;
//     height = 100;
//     IMAGES_WALK = [
//         'img/2_enemies/Zombie Woman/walk/1.png',
//         'img/2_enemies/Zombie Woman/walk/2.png',
//         'img/2_enemies/Zombie Woman/walk/3.png',
//         'img/2_enemies/Zombie Woman/walk/4.png',
//         'img/2_enemies/Zombie Woman/walk/5.png',
//         'img/2_enemies/Zombie Woman/walk/6.png',
//         'img/2_enemies/Zombie Woman/walk/7.png',
//     ];

//     constructor() {
//         super().loadImage('img/2_enemies/Zombie Woman/walk/1.png');
//         this.loadImages(this.IMAGES_WALK);
//         this.x = 200 + Math.random() * 450;
//         this.speed = 0.04 + Math.random() * 0.15;
//         this.walking_sound = new Audio('audio/zombie_walk.wav');
//         this.walking_sound.volume = 0.15;
//         // animateEnemies(this);
//     }
// }

// function animateEnemies(o) {
// o.moveLeft();
// setInterval(() => {
//     o.x -= o.speed;
//     o.otherDirection = true;
// });
// setInterval(() => {
//     o.walking_sound.play();
//     if (o.isManZombieDead()) {
//         o.playAnimation(o.IMAGES_DEAD);
//     } else {
//         o.playAnimation(o.IMAGES_WALK);
//     }
// }, 425);
// }
