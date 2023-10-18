class Character extends MovableObject {
    x = 100;
    y = 293;
    width = 60;
    height = 120;
    speed = 3.5;
    otherDirection = false;
    camera_x = 100;
    lastAttackTime = 0;
    maxAttackDuration = 1000;

    IMAGES_WALK = [
        'img/1_characters/Raider_3/walk/1.png',
        'img/1_characters/Raider_3/walk/2.png',
        'img/1_characters/Raider_3/walk/3.png',
        'img/1_characters/Raider_3/walk/4.png',
        'img/1_characters/Raider_3/walk/6.png',
        'img/1_characters/Raider_3/walk/7.png',
    ];
    IMAGES_JUMP = [
        'img/1_characters/Raider_3/jump/1.png',
        'img/1_characters/Raider_3/jump/2.png',
        'img/1_characters/Raider_3/jump/3.png',
        'img/1_characters/Raider_3/jump/4.png',
        'img/1_characters/Raider_3/jump/5.png',
        'img/1_characters/Raider_3/jump/6.png',
        'img/1_characters/Raider_3/jump/7.png',
        'img/1_characters/Raider_3/jump/8.png',
    ]
    IMAGES_DEAD = [
        // 'img/1_characters/Raider_3/dead/1.png',
        // 'img/1_characters/Raider_3/dead/2.png',
        'img/1_characters/Raider_3/dead/3.png',
        // 'img/1_characters/Raider_3/dead/4.png',
    ];

    IMAGES_HURT = [
        'img/1_characters/Raider_3/hurt/1.png',
        'img/1_characters/Raider_3/hurt/3.png',
    ];

    IMAGES_ATTACK = [
        'img/1_characters/Raider_3/attack/1.png',
        'img/1_characters/Raider_3/attack/2.png',
        'img/1_characters/Raider_3/attack/3.png',
        'img/1_characters/Raider_3/attack/4.png',
        'img/1_characters/Raider_3/attack/5.png',
    ];
    // IMAGES_IDLE = [
    //     'img/1_characters/Raider_3/idle/1.png',
    //     'img/1_characters/Raider_3/idle/2.png',
    //     'img/1_characters/Raider_3/idle/3.png',
    //     'img/1_characters/Raider_3/idle/4.png',
    //     'img/1_characters/Raider_3/idle/5.png',
    //     'img/1_characters/Raider_3/idle/6.png',
    // ];

    world;

    constructor() {
        super().loadImage('img/1_characters/Raider_3/walk/1.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_JUMP);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ATTACK);
        // this.loadImages(this.IMAGES_IDLE);
        this.animate();
        this.walking_sound = new Audio('audio/character_walk.wav');
        this.applyGravity();
        this.walking_sound.volume = 0.2;
    }
    animate() {

        setInterval(() => {
            this.walking_sound.pause();
            if (!this.isDead() && this.world.keyboard.D && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.walking_sound.play();
            }
            if (!this.isDead() && this.world.keyboard.A && this.x > 0) {
                this.moveLeft();
                this.walking_sound.play();
            }
            if (!this.isDead() && this.world.keyboard.W && !this.isAboveGround()) {
                this.jump();
            }


            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);

        setInterval(() => {
            if (this.isDead()) {
                this.characterMovable = false;
                this.playAnimation(this.IMAGES_DEAD);

                setTimeout(() => {
                    setInterval(() => {
                        this.y -= this.speedY;
                        this.speedY -= 0.5;
                    }, 200);
                }, 2000);

            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMP);
            } else {
                if (this.world.keyboard.D && this.x < this.world.level.level_end_x || this.world.keyboard.A && this.x > 0) {
                    this.playAnimation(this.IMAGES_WALK);
                }
            }
        }, 300);

        setInterval(() => {
            let currentTime = new Date().getTime();
            let difference = currentTime - this.lastAttackTime;
            if (this.world.keyboard.J) {
                if (this.lastAttackTime === 0) {
                    this.lastAttackTime = currentTime; // beim drücken soll lastAttackTime die aktuelle Zeit in echt bekommen
                } else if (!this.isDead() && difference <= this.maxAttackDuration) {
                    this.playAnimation(this.IMAGES_ATTACK);
                    this.attack();

                } else if (difference > this.maxAttackDuration) {
                    this.world.keyboard.J = false;
                    this.isAttacking = false;
                }
            } else {
                this.world.keyboard.J = false;
                this.lastAttackTime = 0;
                this.isAttacking = false;
            }
        }, 125); // schlaggeschwindigkeit

    }
}