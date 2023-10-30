class Endboss extends MovableObject {
    /**
     * Arrays of image paths for the animation of the end boss.
     */
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
        'img/3_endboss/ORK_03_DIE_000.png',
        'img/3_endboss/ORK_03_DIE_001.png',
        'img/3_endboss/ORK_03_DIE_001.png',
        'img/3_endboss/ORK_03_DIE_002.png',
        'img/3_endboss/ORK_03_DIE_002.png',
        'img/3_endboss/ORK_03_DIE_003.png',
        'img/3_endboss/ORK_03_DIE_003.png',
        'img/3_endboss/ORK_03_DIE_004.png',
        'img/3_endboss/ORK_03_DIE_004.png',
        'img/3_endboss/ORK_03_DIE_005.png',
        'img/3_endboss/ORK_03_DIE_005.png',
        'img/3_endboss/ORK_03_DIE_006.png',
        'img/3_endboss/ORK_03_DIE_006.png',
        'img/3_endboss/ORK_03_DIE_007.png',
        'img/3_endboss/ORK_03_DIE_007.png',
        'img/3_endboss/ORK_03_DIE_008.png',
        'img/3_endboss/ORK_03_DIE_008.png',
        'img/3_endboss/ORK_03_DIE_009.png',
        'img/3_endboss/ORK_03_DIE_009.png',
        'img/3_endboss/ORK_03_DIE_009.png',
        'img/3_endboss/ORK_03_DIE_009.png',
        'img/3_endboss/ORK_03_DIE_009.png',
    ];

    /**
     * Create an end boss object.
     */
    constructor() {
        super().loadImage('img/3_endboss/ORK_03_IDLE_000.png');
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_RUN);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.speed = 8 + Math.random() * 2;
        this.otherDirection = true;
        this.animateEndboss();
        this.endbossInterval;
    }

    /**
     * Start the end boss animations.
     */
    animateEndboss() {
        let endbossInterval = setInterval(() => {
            if (this.endbossIsDead === true) {
                this.playAnimation(this.IMAGES_DEAD);
                setTimeout(() => {
                    endbossDied();
                    clearInterval(endbossInterval);
                }, 2000);
            } else if (this.endbossMoveLeft()) {
                this.playAnimation(this.IMAGES_RUN);
                this.moveLeft();
            } else if (this.endbossMoveRight()) {
                this.playAnimation(this.IMAGES_RUN);
                this.moveRight();
            }
            else if (this.endbossIsGettingDamage()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.enemyIsThrownOff === true) {
                this.playAnimation(this.IMAGES_HURT);
                setTimeout(() => {
                    this.enemyIsThrownOff = false;
                }, 625);
            } else if (this.endbossIsAttacking()) {
                this.playAnimation(this.IMAGES_ATTACK);
            } else
                this.playAnimation(this.IMAGES_IDLE);
        }, 60);
    }

    /**
     * Check if the end boss should move to the left.
     */
    endbossMoveLeft() {
        return this.checkFollowingLeft === true && this.checkFollowingRight === false && this.checkColliding === false && this.enemyIsThrownOff === false;
    }

    /**
   * Check if the end boss should move to the right.
   */
    endbossMoveRight() {
        return this.checkFollowingLeft === false && this.checkFollowingRight === true && this.checkColliding === false && this.enemyIsThrownOff === false;
    }

    /**
     * Check if the end boss is receiving damage.
     * @returns {boolean} - True if the end boss is being attacked and colliding, or colliding while the player character is above ground.
     */
    endbossIsGettingDamage() {
        return (this.checkGettingAttacked === true && this.checkColliding === true) || (this.checkColliding === true && world.character.isAboveGround());
    }

    /**
    * Check if the end boss is attacking.
    * @returns {boolean} - True if the end boss is colliding, not being attacked, and the player character is not above ground.
    */
    endbossIsAttacking() {
        return this.checkColliding === true && this.enemyIsAttacked === false && !world.character.isAboveGround();
    }
}