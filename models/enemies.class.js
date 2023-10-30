class WildZombie extends MovableObject {
    /**
     * Arrays of image paths for red troll the animation.
     */
    IMAGES_WALK = [
        'img/2_enemies/trol_red/Troll_03_1_WALK_000.png',
        'img/2_enemies/trol_red/Troll_03_1_WALK_001.png',
        'img/2_enemies/trol_red/Troll_03_1_WALK_002.png',
        'img/2_enemies/trol_red/Troll_03_1_WALK_003.png',
        'img/2_enemies/trol_red/Troll_03_1_WALK_004.png',
        'img/2_enemies/trol_red/Troll_03_1_WALK_005.png',
        'img/2_enemies/trol_red/Troll_03_1_WALK_006.png',
        'img/2_enemies/trol_red/Troll_03_1_WALK_007.png',
        'img/2_enemies/trol_red/Troll_03_1_WALK_008.png',
        'img/2_enemies/trol_red/Troll_03_1_WALK_009.png',

    ];
    IMAGES_DEAD = [
        'img/2_enemies/trol_red/Troll_03_1_DIE_000.png',
        'img/2_enemies/trol_red/Troll_03_1_DIE_001.png',
        'img/2_enemies/trol_red/Troll_03_1_DIE_002.png',
        'img/2_enemies/trol_red/Troll_03_1_DIE_003.png',
        'img/2_enemies/trol_red/Troll_03_1_DIE_004.png',
        'img/2_enemies/trol_red/Troll_03_1_DIE_005.png',
        'img/2_enemies/trol_red/Troll_03_1_DIE_006.png',
        'img/2_enemies/trol_red/Troll_03_1_DIE_007.png',
        'img/2_enemies/trol_red/Troll_03_1_DIE_008.png',
        'img/2_enemies/trol_red/Troll_03_1_DIE_009.png',

    ];
    IMAGES_HURT = [
        'img/2_enemies/trol_red/Troll_03_1_HURT_000.png',
        'img/2_enemies/trol_red/Troll_03_1_HURT_001.png',
        'img/2_enemies/trol_red/Troll_03_1_HURT_002.png',
        'img/2_enemies/trol_red/Troll_03_1_HURT_003.png',
        'img/2_enemies/trol_red/Troll_03_1_HURT_004.png',
        'img/2_enemies/trol_red/Troll_03_1_HURT_005.png',
        'img/2_enemies/trol_red/Troll_03_1_HURT_006.png',
        'img/2_enemies/trol_red/Troll_03_1_HURT_007.png',
        'img/2_enemies/trol_red/Troll_03_1_HURT_008.png',
        'img/2_enemies/trol_red/Troll_03_1_HURT_009.png',
    ];
    IMAGES_ATTACK = [
        'img/2_enemies/trol_red/Troll_03_1_ATTACK_000.png',
        'img/2_enemies/trol_red/Troll_03_1_ATTACK_001.png',
        'img/2_enemies/trol_red/Troll_03_1_ATTACK_002.png',
        'img/2_enemies/trol_red/Troll_03_1_ATTACK_003.png',
        'img/2_enemies/trol_red/Troll_03_1_ATTACK_004.png',
        'img/2_enemies/trol_red/Troll_03_1_ATTACK_005.png',
        'img/2_enemies/trol_red/Troll_03_1_ATTACK_006.png',
        'img/2_enemies/trol_red/Troll_03_1_ATTACK_007.png',
        'img/2_enemies/trol_red/Troll_03_1_ATTACK_008.png',
        'img/2_enemies/trol_red/Troll_03_1_ATTACK_009.png',
    ];
    IMAGES_IDLE = [
        'img/2_enemies/trol_red/Troll_03_1_IDLE_000.png',
        'img/2_enemies/trol_red/Troll_03_1_IDLE_001.png',
        'img/2_enemies/trol_red/Troll_03_1_IDLE_002.png',
        'img/2_enemies/trol_red/Troll_03_1_IDLE_003.png',
        'img/2_enemies/trol_red/Troll_03_1_IDLE_004.png',
        'img/2_enemies/trol_red/Troll_03_1_IDLE_005.png',
        'img/2_enemies/trol_red/Troll_03_1_IDLE_006.png',
        'img/2_enemies/trol_red/Troll_03_1_IDLE_007.png',
        'img/2_enemies/trol_red/Troll_03_1_IDLE_008.png',
        'img/2_enemies/trol_red/Troll_03_1_IDLE_009.png',
    ];

    /**
     * Creates an instance of the red troll class.
     * Loads the initial image, sets animation images, speed, and initiates animation.
     */
    constructor() {
        super().loadImage('img/2_enemies/trol_red/Troll_03_1_WALK_000.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_IDLE);
        this.speed = 3 + Math.random() * 0.5;
        // this.walking_sound = new Audio('audio/zombie_walk.wav');
        // this.walking_sound.volume = 0.15;
        animateEnemy(this);
        this.otherDirection = true;
    }
}

class ManZombie extends MovableObject {
    /**
     * Arrays of image paths for green troll the animation.
     */
    IMAGES_WALK = [
        'img/2_enemies/troll_green/Troll_01_1_WALK_000.png',
        'img/2_enemies/troll_green/Troll_01_1_WALK_001.png',
        'img/2_enemies/troll_green/Troll_01_1_WALK_002.png',
        'img/2_enemies/troll_green/Troll_01_1_WALK_003.png',
        'img/2_enemies/troll_green/Troll_01_1_WALK_004.png',
        'img/2_enemies/troll_green/Troll_01_1_WALK_005.png',
        'img/2_enemies/troll_green/Troll_01_1_WALK_006.png',
        'img/2_enemies/troll_green/Troll_01_1_WALK_007.png',
        'img/2_enemies/troll_green/Troll_01_1_WALK_008.png',
        'img/2_enemies/troll_green/Troll_01_1_WALK_009.png',
    ];
    IMAGES_DEAD = [
        'img/2_enemies/troll_green/Troll_01_1_DIE_000.png',
        'img/2_enemies/troll_green/Troll_01_1_DIE_001.png',
        'img/2_enemies/troll_green/Troll_01_1_DIE_002.png',
        'img/2_enemies/troll_green/Troll_01_1_DIE_003.png',
        'img/2_enemies/troll_green/Troll_01_1_DIE_004.png',
        'img/2_enemies/troll_green/Troll_01_1_DIE_005.png',
        'img/2_enemies/troll_green/Troll_01_1_DIE_006.png',
        'img/2_enemies/troll_green/Troll_01_1_DIE_007.png',
        'img/2_enemies/troll_green/Troll_01_1_DIE_008.png',
        'img/2_enemies/troll_green/Troll_01_1_DIE_009.png',
        'img/2_enemies/troll_green/Troll_01_1_DIE_009.png',
        'img/2_enemies/troll_green/Troll_01_1_DIE_009.png',
        'img/2_enemies/troll_green/Troll_01_1_DIE_009.png',
        'img/2_enemies/troll_green/Troll_01_1_DIE_009.png',
        'img/2_enemies/troll_green/Troll_01_1_DIE_009.png',
        'img/2_enemies/troll_green/Troll_01_1_DIE_009.png',
        'img/2_enemies/troll_green/Troll_01_1_DIE_009.png',
        'img/2_enemies/troll_green/Troll_01_1_DIE_009.png',
        'img/2_enemies/troll_green/Troll_01_1_DIE_009.png',
        'img/2_enemies/troll_green/Troll_01_1_DIE_009.png',
        'img/2_enemies/troll_green/Troll_01_1_DIE_009.png',
        'img/2_enemies/troll_green/Troll_01_1_DIE_009.png',
        'img/2_enemies/troll_green/Troll_01_1_DIE_009.png',
        'img/2_enemies/troll_green/Troll_01_1_DIE_009.png',
        'img/2_enemies/troll_green/Troll_01_1_DIE_009.png',
        'img/2_enemies/troll_green/Troll_01_1_DIE_009.png',
        'img/2_enemies/troll_green/Troll_01_1_DIE_009.png',
        'img/2_enemies/troll_green/Troll_01_1_DIE_009.png',
        'img/2_enemies/troll_green/Troll_01_1_DIE_009.png',
    ];
    IMAGES_HURT = [
        'img/2_enemies/troll_green/Troll_01_1_HURT_000.png',
        'img/2_enemies/troll_green/Troll_01_1_HURT_001.png',
        'img/2_enemies/troll_green/Troll_01_1_HURT_002.png',
        'img/2_enemies/troll_green/Troll_01_1_HURT_003.png',
        'img/2_enemies/troll_green/Troll_01_1_HURT_004.png',
        'img/2_enemies/troll_green/Troll_01_1_HURT_005.png',
        'img/2_enemies/troll_green/Troll_01_1_HURT_006.png',
        'img/2_enemies/troll_green/Troll_01_1_HURT_007.png',
        'img/2_enemies/troll_green/Troll_01_1_HURT_008.png',
        'img/2_enemies/troll_green/Troll_01_1_HURT_009.png',
    ];
    IMAGES_ATTACK = [
        'img/2_enemies/troll_green/Troll_01_1_ATTACK_000.png',
        'img/2_enemies/troll_green/Troll_01_1_ATTACK_001.png',
        'img/2_enemies/troll_green/Troll_01_1_ATTACK_002.png',
        'img/2_enemies/troll_green/Troll_01_1_ATTACK_003.png',
        'img/2_enemies/troll_green/Troll_01_1_ATTACK_004.png',
        'img/2_enemies/troll_green/Troll_01_1_ATTACK_005.png',
        'img/2_enemies/troll_green/Troll_01_1_ATTACK_006.png',
        'img/2_enemies/troll_green/Troll_01_1_ATTACK_007.png',
        'img/2_enemies/troll_green/Troll_01_1_ATTACK_008.png',
        'img/2_enemies/troll_green/Troll_01_1_ATTACK_009.png',
    ];
    IMAGES_IDLE = [
        'img/2_enemies/troll_green/Troll_01_1_IDLE_000.png',
        'img/2_enemies/troll_green/Troll_01_1_IDLE_001.png',
        'img/2_enemies/troll_green/Troll_01_1_IDLE_002.png',
        'img/2_enemies/troll_green/Troll_01_1_IDLE_003.png',
        'img/2_enemies/troll_green/Troll_01_1_IDLE_004.png',
        'img/2_enemies/troll_green/Troll_01_1_IDLE_005.png',
        'img/2_enemies/troll_green/Troll_01_1_IDLE_006.png',
        'img/2_enemies/troll_green/Troll_01_1_IDLE_007.png',
        'img/2_enemies/troll_green/Troll_01_1_IDLE_008.png',
        'img/2_enemies/troll_green/Troll_01_1_IDLE_009.png',
    ];

    /**
     * Creates an instance of the green troll class.
     * Loads the initial image, sets animation images, speed, and initiates animation.
     */
    constructor() {
        super().loadImage('img/2_enemies/troll_green/Troll_01_1_WALK_000.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_IDLE);
        this.speed = 3 + Math.random() * 0.5;
        // this.walking_sound = new Audio('audio/zombie_walk.wav');
        // this.walking_sound.volume = 0.15;
        animateEnemy(this);
        this.otherDirection = true;
    }
}

class WomanZombie extends MovableObject {
    /**
     * Arrays of image paths for the grey troll animation.
     */
    IMAGES_WALK = [
        'img/2_enemies/troll_grey/Troll_02_1_WALK_000.png',
        'img/2_enemies/troll_grey/Troll_02_1_WALK_001.png',
        'img/2_enemies/troll_grey/Troll_02_1_WALK_002.png',
        'img/2_enemies/troll_grey/Troll_02_1_WALK_003.png',
        'img/2_enemies/troll_grey/Troll_02_1_WALK_004.png',
        'img/2_enemies/troll_grey/Troll_02_1_WALK_005.png',
        'img/2_enemies/troll_grey/Troll_02_1_WALK_006.png',
        'img/2_enemies/troll_grey/Troll_02_1_WALK_007.png',
        'img/2_enemies/troll_grey/Troll_02_1_WALK_008.png',
        'img/2_enemies/troll_grey/Troll_02_1_WALK_009.png',
    ];
    IMAGES_DEAD = [
        'img/2_enemies/troll_grey/Troll_02_1_DIE_000.png',
        'img/2_enemies/troll_grey/Troll_02_1_DIE_001.png',
        'img/2_enemies/troll_grey/Troll_02_1_DIE_002.png',
        'img/2_enemies/troll_grey/Troll_02_1_DIE_003.png',
        'img/2_enemies/troll_grey/Troll_02_1_DIE_004.png',
        'img/2_enemies/troll_grey/Troll_02_1_DIE_005.png',
        'img/2_enemies/troll_grey/Troll_02_1_DIE_006.png',
        'img/2_enemies/troll_grey/Troll_02_1_DIE_007.png',
        'img/2_enemies/troll_grey/Troll_02_1_DIE_008.png',
        'img/2_enemies/troll_grey/Troll_02_1_DIE_009.png',
    ];
    IMAGES_HURT = [
        'img/2_enemies/troll_grey/Troll_02_1_HURT_000.png',
        'img/2_enemies/troll_grey/Troll_02_1_HURT_001.png',
        'img/2_enemies/troll_grey/Troll_02_1_HURT_002.png',
        'img/2_enemies/troll_grey/Troll_02_1_HURT_003.png',
        'img/2_enemies/troll_grey/Troll_02_1_HURT_004.png',
        'img/2_enemies/troll_grey/Troll_02_1_HURT_005.png',
        'img/2_enemies/troll_grey/Troll_02_1_HURT_006.png',
        'img/2_enemies/troll_grey/Troll_02_1_HURT_007.png',
        'img/2_enemies/troll_grey/Troll_02_1_HURT_008.png',
        'img/2_enemies/troll_grey/Troll_02_1_HURT_009.png',
    ];
    IMAGES_ATTACK = [
        'img/2_enemies/troll_grey/Troll_02_1_ATTACK_000.png',
        'img/2_enemies/troll_grey/Troll_02_1_ATTACK_001.png',
        'img/2_enemies/troll_grey/Troll_02_1_ATTACK_002.png',
        'img/2_enemies/troll_grey/Troll_02_1_ATTACK_003.png',
        'img/2_enemies/troll_grey/Troll_02_1_ATTACK_004.png',
        'img/2_enemies/troll_grey/Troll_02_1_ATTACK_005.png',
        'img/2_enemies/troll_grey/Troll_02_1_ATTACK_006.png',
        'img/2_enemies/troll_grey/Troll_02_1_ATTACK_007.png',
        'img/2_enemies/troll_grey/Troll_02_1_ATTACK_008.png',
        'img/2_enemies/troll_grey/Troll_02_1_ATTACK_009.png',
    ];
    IMAGES_IDLE = [
        'img/2_enemies/troll_grey/Troll_02_1_IDLE_000.png',
        'img/2_enemies/troll_grey/Troll_02_1_IDLE_001.png',
        'img/2_enemies/troll_grey/Troll_02_1_IDLE_002.png',
        'img/2_enemies/troll_grey/Troll_02_1_IDLE_003.png',
        'img/2_enemies/troll_grey/Troll_02_1_IDLE_004.png',
        'img/2_enemies/troll_grey/Troll_02_1_IDLE_005.png',
        'img/2_enemies/troll_grey/Troll_02_1_IDLE_006.png',
        'img/2_enemies/troll_grey/Troll_02_1_IDLE_007.png',
        'img/2_enemies/troll_grey/Troll_02_1_IDLE_008.png',
        'img/2_enemies/troll_grey/Troll_02_1_IDLE_009.png',
    ];

    /**
     * Creates an instance of the grey troll class.
     * Loads the initial image, sets animation images, speed, and initiates animation.
     */
    constructor() {
        super().loadImage('img/2_enemies/troll_grey/Troll_02_1_WALK_000.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_IDLE);
        this.speed = 3 + Math.random() * 0.5;
        // this.walking_sound = new Audio('audio/zombie_walk.wav');
        // this.walking_sound.volume = 0.15;
        animateEnemy(this);
        this.otherDirection = true;
    }
}

/**
 * Initiates the animation of the given enemy object.
 * @param {object} o - "this" operator.
 */
function animateEnemy(o) {
    o.enemiesInterval = setInterval(() => {
        if (enemyIsDead(o)) {
            o.playAnimation(o.IMAGES_DEAD);
            setTimeout(() => {
                o.y = 400;
            }, 2500);
        } else if (enemyIsGettingAttacked(o)) {
            o.playAnimation(o.IMAGES_HURT);
        } else if (o.enemyIsThrownOff === true) {
            o.playAnimation(o.IMAGES_HURT);
            setTimeout(() => {
                o.enemyIsThrownOff = false;
            }, 625);
        } else if (enemyIsAttacking(o)) {
            o.playAnimation(o.IMAGES_ATTACK);
        }
        else if (enemyIsWalkingLeft(o)) {
            o.playAnimation(o.IMAGES_WALK);
            o.moveLeft();
        } else if (enemyIsWalkingRight(o)) {
            o.playAnimation(o.IMAGES_WALK);
            o.moveRight();
        } else if (enemyIsJumped(o)) {
            o.playAnimation(o.IMAGES_HURT);
        }
    }, 60);
}

/**
 * Checks if the enemy is dead.
 */
function enemyIsDead(o) {
    return o.energyEnemy === 0;
}

/**
 * Checks if the enemy is getting attacked.
 */
function enemyIsGettingAttacked(o) {
    return o.checkGettingAttacked === true && o.checkColliding === true;
}

/**
 * Checks if the enemy is attacking.
 */
function enemyIsAttacking(o) {
    return o.checkColliding === true && o.enemyIsAttacked === false && world.character.y === 212;
}

/**
 * Checks if the enemy is walking left.
 */
function enemyIsWalkingLeft(o) {
    return o.checkFollowingLeft === true && o.checkFollowingRight === false && o.checkColliding === false && o.enemyIsThrownOff === false && o.enemiesMovable === true;
}

/**
 * Checks if the enemy is walking right.
 */
function enemyIsWalkingRight(o) {
    return o.checkFollowingLeft === false && o.checkFollowingRight === true && o.checkColliding === false && o.enemyIsThrownOff === false && o.enemiesMovable === true;
}

/**
 * Checks whether the opponent is jumped on.
 */
function enemyIsJumped(o) {
    return o.checkColliding === true && world.character.y < 212;
}
