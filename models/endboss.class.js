class Endboss extends MovableObject {
    x = 100;
    y = 65;
    offset = {
        top: 230 * 0.7,
        bottom: 205,
        left: 550 / 2,
        right: 550,
    }
    offsetOnFollowingLeft = {
        top: 230 * 0.7,
        bottom: 205,
        left: 0,
        right: 400,
    }
    offsetOnFollowingRight = {
        top: 230 * 0.7,
        bottom: 205,
        left: 400,
        right: 0,
    }
    width = 700;
    height = 400;
    IMAGES_IDLE = [
        'img/3_endboss/ORK_03_IDLE_000.png',
        'img/3_endboss/ORK_03_IDLE_001.png',
        'img/3_endboss/ORK_03_IDLE_002.png',
        'img/3_endboss/ORK_03_IDLE_003.png',
        'img/3_endboss/ORK_03_IDLE_004.png',
        'img/3_endboss/ORK_03_IDLE_005.png',
        'img/3_endboss/ORK_03_IDLE_006.png',
        'img/3_endboss/ORK_03_IDLE_007.png',
        'img/3_endboss/ORK_03_IDLE_008.png',
        'img/3_endboss/ORK_03_IDLE_009.png',
    ];
    IMAGES_RUN = [
        'img/3_endboss/ORK_03_RUN_000.png',
        'img/3_endboss/ORK_03_RUN_001.png',
        'img/3_endboss/ORK_03_RUN_002.png',
        'img/3_endboss/ORK_03_RUN_003.png',
        'img/3_endboss/ORK_03_RUN_004.png',
        'img/3_endboss/ORK_03_RUN_005.png',
        'img/3_endboss/ORK_03_RUN_006.png',
        'img/3_endboss/ORK_03_RUN_007.png',
        'img/3_endboss/ORK_03_RUN_008.png',
        'img/3_endboss/ORK_03_RUN_009.png',
    ];
    IMAGES_ATTACK = [
        'img/3_endboss/ORK_03_ATTAK_000.png',
        'img/3_endboss/ORK_03_ATTAK_001.png',
        'img/3_endboss/ORK_03_ATTAK_002.png',
        'img/3_endboss/ORK_03_ATTAK_003.png',
        'img/3_endboss/ORK_03_ATTAK_004.png',
        'img/3_endboss/ORK_03_ATTAK_005.png',
        'img/3_endboss/ORK_03_ATTAK_006.png',
        'img/3_endboss/ORK_03_ATTAK_007.png',
        'img/3_endboss/ORK_03_ATTAK_008.png',
        'img/3_endboss/ORK_03_ATTAK_009.png',
    ];
    IMAGES_IDLE = [
        'img/3_endboss/ORK_03_IDLE_000.png',
        'img/3_endboss/ORK_03_IDLE_001.png',
        'img/3_endboss/ORK_03_IDLE_002.png',
        'img/3_endboss/ORK_03_IDLE_003.png',
        'img/3_endboss/ORK_03_IDLE_004.png',
        'img/3_endboss/ORK_03_IDLE_005.png',
        'img/3_endboss/ORK_03_IDLE_006.png',
        'img/3_endboss/ORK_03_IDLE_007.png',
        'img/3_endboss/ORK_03_IDLE_008.png',
        'img/3_endboss/ORK_03_IDLE_009.png',
    ]
    IMAGES_HURT = [
        'img/3_endboss/ORK_03_HURT_000.png',
        'img/3_endboss/ORK_03_HURT_001.png',
        'img/3_endboss/ORK_03_HURT_002.png',
        'img/3_endboss/ORK_03_HURT_003.png',
        'img/3_endboss/ORK_03_HURT_004.png',
        'img/3_endboss/ORK_03_HURT_005.png',
        'img/3_endboss/ORK_03_HURT_006.png',
        'img/3_endboss/ORK_03_HURT_007.png',
        'img/3_endboss/ORK_03_HURT_008.png',
        'img/3_endboss/ORK_03_HURT_009.png',
    ];
    IMAGES_DEAD = [
        'img/3_endboss/ORK_03_DIE_000.png',
        'img/3_endboss/ORK_03_DIE_001.png',
        'img/3_endboss/ORK_03_DIE_002.png',
        'img/3_endboss/ORK_03_DIE_003.png',
        'img/3_endboss/ORK_03_DIE_004.png',
        'img/3_endboss/ORK_03_DIE_005.png',
        'img/3_endboss/ORK_03_DIE_006.png',
        'img/3_endboss/ORK_03_DIE_007.png',
        'img/3_endboss/ORK_03_DIE_008.png',
        'img/3_endboss/ORK_03_DIE_009.png',
    ];

    constructor() {
        super().loadImage('img/3_endboss/ORK_03_IDLE_000.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_RUN);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.x = 600; // 2225
        this.speed = 5 + Math.random() * 2;
        // this.walking_sound = new Audio('audio/zombie_walk.wav');
        // this.walking_sound.volume = 0.15;
        animateEndboss(this);
    }
}

function animateEndboss(o) {
    o.moveLeft();
    setInterval(() => {
        // if (o.energyEndboss < 100 && o.energyEndboss >= 80 && o.x <= 620 && o.x >= 150) {
        //     o.playAnimation(o.IMAGES_RUN);
        //     o.moveLeft();
        //     if (o.x <= 160 && o.x >= 130) { // console.log(world.level.enemies
        //         o.otherDirection = false;
        //     }

        // } else if (o.energyEndboss < 80 && o.energyEndboss >= 60 && o.x <= 630 && o.x >= 140) {
        //     o.playAnimation(o.IMAGES_RUN);
        //     o.moveRight();
        //     if (o.x <= 640 && o.x >= 590) {
        //         o.otherDirection = true;
        //     }
        // } else if (o.energyEndboss < 60 && o.energyEndboss >= 40 && o.x <= 640 && o.x >= 130) {
        //     o.playAnimation(o.IMAGES_RUN);
        //     o.moveLeft();
        //     if (o.x <= 160 && o.x >= 120) {
        //         o.otherDirection = false;
        //     }
        // } else if (o.energyEndboss < 40 && o.energyEndboss >= 20 && o.x <= 650 && o.x >= 120) {
        //     o.playAnimation(o.IMAGES_RUN);
        //     o.moveRight();
        //     if (o.x <= 660 && o.x >= 650) {
        //         o.otherDirection = true;
        //     }
        // }
        // else
        //     o.playAnimation(o.IMAGES_IDLE);
        // // console.log(`live: `, o.energyEndboss);
        // // console.log(`x: `, o.x);
        // NEU
        if (o.isFollowingLeft(world.character) && !o.isColliding(world.character)) {
            o.moveLeft();
            o.playAnimation(o.IMAGES_RUN);
        } else if (o.isFollowingRight(world.character) && !o.isColliding(world.character)) {
            o.moveRight();
            o.playAnimation(o.IMAGES_RUN);
        } else if (o.isColliding(world.character) && world.character.isAttacking === false) {
            o.playAnimation(o.IMAGES_ATTACK);
        } else if (world.character.energyCharacter === 0 || !o.isFollowingLeft(world.character) || !o.isFollowingRight(world.character) && world.character.isAttacking === false) {
            o.playAnimation(o.IMAGES_IDLE);
        } else if (world.character.isAttacking === true || world.character.isAboveGround()) {
            o.playAnimation(o.IMAGES_HURT);
        } else if (o.energyEndboss === 0) {
            o.playAnimation(o.IMAGES_DEAD);
        }
    }, 70);
}
