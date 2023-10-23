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
        this.x = 2000; // 2225
        this.speed = 8 + Math.random() * 2;
        this.otherDirection = true;
        // this.walking_sound = new Audio('audio/zombie_walk.wav');
        // this.walking_sound.volume = 0.15;
        animateEndboss(this);
    }
}

function animateEndboss(o) {
    setInterval(() => {
        if (o.energyEndboss === 0) {
            o.playAnimation(o.IMAGES_DEAD);
            setInterval(() => {
                o.y -= o.speedY;
                o.speedY -= 0.5;
            }, 200);
        } else if (o.checkFollowingLeft === true && o.checkFollowingRight === false && o.checkColliding === false && o.enemyIsThrownOff === false) {
            o.playAnimation(o.IMAGES_RUN);
            o.moveLeft();
        } else if (o.checkFollowingLeft === false && o.checkFollowingRight === true && o.checkColliding === false && o.enemyIsThrownOff === false) {
            o.playAnimation(o.IMAGES_RUN);
            o.moveRight();
        }
        else if (o.checkGettingAttacked === true && o.checkColliding === true) {
            o.energyEndboss -= 1;
            o.playAnimation(o.IMAGES_HURT);
        } else if (o.enemyIsThrownOff === true) {
            o.energyEndboss -= 1;
            o.playAnimation(o.IMAGES_HURT);
            setTimeout(() => {
                o.enemyIsThrownOff = false;
            }, 625);
            // } else if (o.checkColliding === true && o.charackterIsJumpingOnOpponent === true) {
            //     o.playAnimation(o.IMAGES_HURT);
        } else if (o.checkColliding === true && o.enemyIsAttacked === false && o.checkColliding === true) {
            o.playAnimation(o.IMAGES_ATTACK);
        } else
            o.playAnimation(o.IMAGES_IDLE);
    }, 60);
}
