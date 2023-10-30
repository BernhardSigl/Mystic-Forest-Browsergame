class Character extends MovableObject {
    /**
     * Character coordiantes and attributes.
     */
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

    /**
     * Arrays of image paths for the character animation.
     */
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

    /**
     * Reference to the game world.
     */
    world;

    /**
    * Create a character object.
    */
    constructor() {
        super().loadImage('img/1_characters/elf_sword/Elf_02__IDLE_000.png');
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_JUMP);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_IDLE);
        this.animate();
        // this.walking_sound = new Audio('audio/character_walk.wav');
        this.applyGravity();
        // this.walking_sound.volume = 0.2;
    }

    /**
     * Start character animations.
     */
    animate() {
        setInterval(() => this.moveCharacter(), 1000 / 60);
        setInterval(() => this.animateCharacter(), 1000 / 10);
        setInterval(() => this.attackFromCharacter(), 1000 / 30);
    }

    /**
     * Move the character based on user input.
     */
    moveCharacter() {
        // this.walking_sound.pause();
        if (this.canMoveRight()) {
            this.moveRight();
            // this.walking_sound.play();
        }
        if (this.canMoveLeft()) {
            this.moveLeft();
            // this.walking_sound.play();
        }
        if (this.canJump()) {
            this.jump();
        }
        this.world.camera_x = -this.x;
    }

    /**
    * Check if the character can move to the right.
    */
    canMoveRight() {
        return !this.isDead() && this.world.keyboard.D && this.x < this.world.level.level_end_x;
    }

    /**
    * Check if the character can move to the left.
    */
    canMoveLeft() {
        return !this.isDead() && this.world.keyboard.A && this.x > 0;
    }

    /**
    * Check if the character can jump.
    */
    canJump() {
        return !this.isDead() && this.world.keyboard.W && !this.isAboveGround();
    }

    /**
     * Animate the character based on its state.
     */
    animateCharacter() {
        if (this.isDead()) {
            this.characterMovable = false;
            this.playAnimation(this.IMAGES_DEAD);
            setTimeout(() => {
                characterDied();
            }, 2500);
        } else if (this.isGettingDamage()) {
            this.playAnimation(this.IMAGES_HURT);
        } else if (this.isAboveGround()) {
            this.playAnimation(this.IMAGES_JUMP);
        } else if (this.isWalking()) {
            this.playAnimation(this.IMAGES_WALK);
        } else {
            this.playAnimation(this.IMAGES_IDLE);
        }
    }

    /**
    * Check if the character is receiving damage.
    */
    isGettingDamage() {
        return this.isHurt() && !this.isAboveGround();
    }

    /**
     * Check if the character is walking.
    */
    isWalking() {
        return this.world.keyboard.D && this.x < this.world.level.level_end_x || this.world.keyboard.A && this.x > 0;
    }

    /**
     * Perform an attack animation if the character is attacking.
     */
    attackFromCharacter() {
        let currentTime = new Date().getTime();
        let difference = currentTime - this.lastAttackTime;
        if (this.world.keyboard.J) {
            if (this.lastAttackTime === 0) {
                this.lastAttackTime = currentTime;
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
    }
}