class Character extends MovableObject {
    offset = {
        top: 132 * 0.7,
        bottom: 132,
        left: 350 / 2,
        right: 350,
    }
    offsetOnFollowingLeft = {
        top: 132 * 0.7,
        bottom: 132,
        left: 350 / 2,
        right: 350,
    }
    offsetOnFollowingRight = {
        top: 132 * 0.7,
        bottom: 132,
        left: 350 / 2,
        right: 350,
    }
    width = 420;
    height = 250;
    speed = 3.5;
    otherDirection = false;
    lastAttackTime = 0;
    maxAttackDuration = 1000;

    IMAGES_WALK = [
        'img/1_characters/elf_sword/Elf_02__WALK_000.png',
        'img/1_characters/elf_sword/Elf_02__WALK_001.png',
        'img/1_characters/elf_sword/Elf_02__WALK_002.png',
        'img/1_characters/elf_sword/Elf_02__WALK_003.png',
        'img/1_characters/elf_sword/Elf_02__WALK_004.png',
        'img/1_characters/elf_sword/Elf_02__WALK_005.png',
        'img/1_characters/elf_sword/Elf_02__WALK_006.png',
        'img/1_characters/elf_sword/Elf_02__WALK_007.png',
        'img/1_characters/elf_sword/Elf_02__WALK_008.png',
        'img/1_characters/elf_sword/Elf_02__WALK_009.png',
    ];
    IMAGES_JUMP = [
        'img/1_characters/elf_sword/Elf_02__JUMP_000.png',
        'img/1_characters/elf_sword/Elf_02__JUMP_001.png',
        'img/1_characters/elf_sword/Elf_02__JUMP_002.png',
        'img/1_characters/elf_sword/Elf_02__JUMP_003.png',
        'img/1_characters/elf_sword/Elf_02__JUMP_004.png',
        'img/1_characters/elf_sword/Elf_02__JUMP_005.png',
        'img/1_characters/elf_sword/Elf_02__JUMP_006.png',
        'img/1_characters/elf_sword/Elf_02__JUMP_007.png',
        'img/1_characters/elf_sword/Elf_02__JUMP_008.png',
        'img/1_characters/elf_sword/Elf_02__JUMP_009.png',

    ]
    IMAGES_DEAD = [
        'img/1_characters/elf_sword/Elf_02__DIE_000.png',
        'img/1_characters/elf_sword/Elf_02__DIE_000.png',
        'img/1_characters/elf_sword/Elf_02__DIE_000.png',
        'img/1_characters/elf_sword/Elf_02__DIE_001.png',
        'img/1_characters/elf_sword/Elf_02__DIE_001.png',
        'img/1_characters/elf_sword/Elf_02__DIE_002.png',
        'img/1_characters/elf_sword/Elf_02__DIE_002.png',
        'img/1_characters/elf_sword/Elf_02__DIE_003.png',
        'img/1_characters/elf_sword/Elf_02__DIE_003.png',
        'img/1_characters/elf_sword/Elf_02__DIE_004.png',
        'img/1_characters/elf_sword/Elf_02__DIE_004.png',
        'img/1_characters/elf_sword/Elf_02__DIE_005.png',
        'img/1_characters/elf_sword/Elf_02__DIE_005.png',
        'img/1_characters/elf_sword/Elf_02__DIE_006.png',
        'img/1_characters/elf_sword/Elf_02__DIE_006.png',
        'img/1_characters/elf_sword/Elf_02__DIE_007.png',
        'img/1_characters/elf_sword/Elf_02__DIE_007.png',
        'img/1_characters/elf_sword/Elf_02__DIE_008.png',
        'img/1_characters/elf_sword/Elf_02__DIE_008.png',
        'img/1_characters/elf_sword/Elf_02__DIE_009.png',
        'img/1_characters/elf_sword/Elf_02__DIE_009.png',
        'img/1_characters/elf_sword/Elf_02__DIE_009.png',
        'img/1_characters/elf_sword/Elf_02__DIE_009.png',
        'img/1_characters/elf_sword/Elf_02__DIE_009.png',
        'img/1_characters/elf_sword/Elf_02__DIE_009.png',
        'img/1_characters/elf_sword/Elf_02__DIE_009.png',
        'img/1_characters/elf_sword/Elf_02__DIE_009.png',
        'img/1_characters/elf_sword/Elf_02__DIE_009.png',
        'img/1_characters/elf_sword/Elf_02__DIE_009.png',
        'img/1_characters/elf_sword/Elf_02__DIE_009.png',
        'img/1_characters/elf_sword/Elf_02__DIE_009.png',
        'img/1_characters/elf_sword/Elf_02__DIE_009.png',
        'img/1_characters/elf_sword/Elf_02__DIE_009.png',
        'img/1_characters/elf_sword/Elf_02__DIE_009.png',
    ];
    IMAGES_HURT = [
        'img/1_characters/elf_sword/Elf_02__HURT_000.png',
        'img/1_characters/elf_sword/Elf_02__HURT_001.png',
        'img/1_characters/elf_sword/Elf_02__HURT_002.png',
        'img/1_characters/elf_sword/Elf_02__HURT_003.png',
        'img/1_characters/elf_sword/Elf_02__HURT_004.png',
        'img/1_characters/elf_sword/Elf_02__HURT_005.png',
        'img/1_characters/elf_sword/Elf_02__HURT_006.png',
        'img/1_characters/elf_sword/Elf_02__HURT_007.png',
        'img/1_characters/elf_sword/Elf_02__HURT_008.png',
        'img/1_characters/elf_sword/Elf_02__HURT_009.png',

    ];
    IMAGES_ATTACK = [
        'img/1_characters/elf_sword/Elf_02__ATTACK_000.png',
        'img/1_characters/elf_sword/Elf_02__ATTACK_001.png',
        'img/1_characters/elf_sword/Elf_02__ATTACK_002.png',
        'img/1_characters/elf_sword/Elf_02__ATTACK_003.png',
        'img/1_characters/elf_sword/Elf_02__ATTACK_004.png',
        'img/1_characters/elf_sword/Elf_02__ATTACK_005.png',
        'img/1_characters/elf_sword/Elf_02__ATTACK_006.png',
        'img/1_characters/elf_sword/Elf_02__ATTACK_007.png',
        'img/1_characters/elf_sword/Elf_02__ATTACK_008.png',
        'img/1_characters/elf_sword/Elf_02__ATTACK_009.png',
    ];
    IMAGES_IDLE = [
        'img/1_characters/elf_sword/Elf_02__IDLE_000.png',
        'img/1_characters/elf_sword/Elf_02__IDLE_001.png',
        'img/1_characters/elf_sword/Elf_02__IDLE_002.png',
        'img/1_characters/elf_sword/Elf_02__IDLE_003.png',
        'img/1_characters/elf_sword/Elf_02__IDLE_004.png',
        'img/1_characters/elf_sword/Elf_02__IDLE_005.png',
        'img/1_characters/elf_sword/Elf_02__IDLE_006.png',
        'img/1_characters/elf_sword/Elf_02__IDLE_007.png',
        'img/1_characters/elf_sword/Elf_02__IDLE_008.png',
        'img/1_characters/elf_sword/Elf_02__IDLE_009.png',
    ];
    IMAGES_IDLE = [
        'img/1_characters/elf_sword/Elf_02__IDLE_000.png',
        'img/1_characters/elf_sword/Elf_02__IDLE_001.png',
        'img/1_characters/elf_sword/Elf_02__IDLE_002.png',
        'img/1_characters/elf_sword/Elf_02__IDLE_003.png',
        'img/1_characters/elf_sword/Elf_02__IDLE_004.png',
        'img/1_characters/elf_sword/Elf_02__IDLE_005.png',
        'img/1_characters/elf_sword/Elf_02__IDLE_006.png',
        'img/1_characters/elf_sword/Elf_02__IDLE_007.png',
        'img/1_characters/elf_sword/Elf_02__IDLE_008.png',
        'img/1_characters/elf_sword/Elf_02__IDLE_009.png',
    ]

    world;

    constructor() {
        super().loadImage('img/1_characters/elf_sword/Elf_02__IDLE_000.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_JUMP);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_IDLE);
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
            this.world.camera_x = -this.x;
        }, 1000 / 60);

        setInterval(() => {
            if (this.energyCharacter === 0) {
                this.characterMovable = false;
                this.playAnimation(this.IMAGES_DEAD);
                setTimeout(() => {
                    characterDied();
                }, 2500);
            } else if (this.isHurt() && !this.isAboveGround()) {
                this.playAnimation(this.IMAGES_HURT);
            } else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMP);
            } else if (this.world.keyboard.D && this.x < this.world.level.level_end_x || this.world.keyboard.A && this.x > 0) {
                this.playAnimation(this.IMAGES_WALK);
            } else {
                this.playAnimation(this.IMAGES_IDLE);
            }

        }, 100);

        setInterval(() => {
            let currentTime = new Date().getTime();
            let difference = currentTime - this.lastAttackTime;
            if (this.world.keyboard.J) {
                if (this.lastAttackTime === 0) {
                    this.lastAttackTime = currentTime; // beim drücken soll lastAttackTime die aktuelle Zeit in echt bekommen
                } else if (!this.isDead() && difference <= this.maxAttackDuration) {
                    this.playAnimation(this.IMAGES_ATTACK);
                    this.isAttacking = true;
                } else if (difference > this.maxAttackDuration) {
                    this.world.keyboard.J = false;
                    this.isAttacking = false;
                }
            } else {
                this.world.keyboard.J = false;
                this.lastAttackTime = 0;
                this.isAttacking = false;
            }
        }, 40); // schlaggeschwindigkeit

    }
}