class WildZombie extends MovableObject {
    x = 100;
    y = 205;
    offset = {
        top: 130 * 0.7,
        bottom: 130,
        left: 300 / 2,
        right: 300,
    }
    offsetOnFollowingLeft = {
        top: 130 * 0.7,
        bottom: 130,
        left: 0,
        right: 225,
    }
    offsetOnFollowingRight = {
        top: 130 * 0.7,
        bottom: 130,
        left: 225,
        right: 0,
    }
    width = 400;
    height = 250;
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

    constructor() {
        super().loadImage('img/2_enemies/trol_red/Troll_03_1_WALK_000.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_IDLE);
        this.x = 200 + Math.random() * 450;
        this.speed = 1.5 + Math.random() * 0.15;
        this.walking_sound = new Audio('audio/zombie_walk.wav');
        this.walking_sound.volume = 0.15;
        animateEnemy(this);
        this.otherDirection = true;
    }
}

class ManZombie extends MovableObject {
    x = 100;
    y = 205;
    offset = {
        top: 130 * 0.7,
        bottom: 130,
        left: 300 / 2,
        right: 300,
    }
    offsetOnFollowingLeft = {
        top: 130 * 0.7,
        bottom: 130,
        left: 0,
        right: 225,
    }
    offsetOnFollowingRight = {
        top: 130 * 0.7,
        bottom: 130,
        left: 225,
        right: 0,
    }
    width = 400;
    height = 250;

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

    constructor() {
        super().loadImage('img/2_enemies/troll_green/Troll_01_1_WALK_000.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_IDLE);
        this.x = 200 + Math.random() * 450;
        this.speed = 4 + Math.random() * 0.15;
        this.walking_sound = new Audio('audio/zombie_walk.wav');
        this.walking_sound.volume = 0.15;
        animateEnemy(this);
        this.otherDirection = true;
    }
}

class WomanZombie extends MovableObject {
    x = 100;
    y = 205;
    offset = {
        top: 130 * 0.7,
        bottom: 130,
        left: 300 / 2,
        right: 300,
    }
    offsetOnFollowingLeft = {
        top: 130 * 0.7,
        bottom: 130,
        left: 0,
        right: 225,
    }
    offsetOnFollowingRight = {
        top: 130 * 0.7,
        bottom: 130,
        left: 225,
        right: 0,
    }
    width = 400;
    height = 250;
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

    constructor() {
        super().loadImage('img/2_enemies/troll_grey/Troll_02_1_WALK_000.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_IDLE);
        this.x = 200 + Math.random() * 450;
        this.speed = 1.75 + Math.random() * 0.15;
        this.walking_sound = new Audio('audio/zombie_walk.wav');
        this.walking_sound.volume = 0.15;
        animateEnemy(this);
        this.otherDirection = true;
    }
}

function animateEnemy(o) {
    setInterval(() => {
        if (o.energyEnemy === 0) {
            o.playAnimation(o.IMAGES_DEAD);
            setInterval(() => {
                o.y -= o.speedY;
                o.speedY -= 0.5;
            }, 200);
        } else if (!o.isColliding(world.character) && world.character.isAttacking === false && o.isFollowingLeft(world.character)) {
            o.playAnimation(o.IMAGES_WALK);
            o.moveLeft();
        } else if (o.isFollowingRight(world.character) && !o.isColliding(world.character) && world.character.isAttacking === false) {
            o.playAnimation(o.IMAGES_WALK);
            o.moveRight();
        }
        else if (world.character.isAttacking === true || (o.isColliding(world.character) && world.character.isAboveGround())) {
            o.playAnimation(o.IMAGES_HURT);
        }
        else if (o.isColliding(world.character) && world.character.isAttacking === false && world.character.energyCharacter !== 0) {
            o.playAnimation(o.IMAGES_ATTACK);
        } else
            o.playAnimation(o.IMAGES_IDLE);
    }, 60);
}
