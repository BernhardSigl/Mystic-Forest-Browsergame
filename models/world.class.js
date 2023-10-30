class World {
    character = new Character();
    manZombie = new ManZombie();
    womanZombie = new WomanZombie();
    wildZombie = new WildZombie();
    endboss = new Endboss();
    statusBar = new StatusBar();
    sticksBar = new SticksBar();
    coinsBar = new CoinsBar();
    statusBarEndBoss = new StatusBarEndBoss();
    coins = new Coins();
    magicalBalls = new Sticks();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = -100;
    cheatActivated = false;

    throwableObjects = [];
    collectedCoins = [];
    collectedSticks = [];
    unlockCheat = [];
    enemiesArray = [];

    /**
     * Create a world object.
     */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.lifeImagesrc = this.lifeImageSrc;
        this.run();
        this.coin_sound = new Audio('audio/coins.mp3');
        this.throwable_object_sound = new Audio('audio/throwable_object.mp3');
        this.enemy_hurting = new Audio('audio/enemy_hurt.wav');
        this.enemy_dead = new Audio('audio/endboss_dead.wav');
        this.throw_sound = new Audio('audio/throw.wav');
    }

    /**
    * Set the character's world reference.
    */
    setWorld() {
        this.character.world = this;
    }

    /**
     * Start the game loop.
     */
    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObject();
        }, 200);
    }

    /**
     * Check various collision events.
     */
    checkCollisions() {
        this.loadEnemies();
        this.loadEndboss();
        this.collisionCoins();
        this.collisionSticks();
        this.collisionThrowableObjectWithEnemy();
        this.collisionEnemiesCharacter();
    }

    /**
     * Load enemy objects and check their collisions.
     */
    loadEnemies() {
        this.level.enemies.forEach((enemy) => {
            this.checkDamageToCharacter(enemy);
            this.checkCollisionEnemies(enemy);
        });
    }

    /**
     * Load endboss object and check his collisions.
     */
    loadEndboss() {
        this.level.endboss.forEach((endboss) => {
            this.checkDamageToCharacter(endboss);
            this.checkCollisionEndboss(endboss);
        });
    }

    /**
     * Check the effects of opponent on character due to collision.
     */
    checkDamageToCharacter(enemyOrEndboss) {
        if (this.character.isColliding(enemyOrEndboss)) {
            if (enemyOrEndboss.energyEnemy > 0 && enemyOrEndboss.energyEndboss > 0) {
                this.character.damageObjectToCharacter();
            }
            if (this.character.isAboveGround() && this.character.speedY < 0) {
                this.character.jump();
            }
            this.statusBar.setPercentage(this.character.energyCharacter);
        }
    }

    /**
     * Check collision between character and enemies.
     */
    checkCollisionEnemies(enemy) {
        if (enemy.isColliding(this.character)) {
            enemy.checkColliding = true;
            this.checkCharacterIsAttackingEnemy(enemy);
        } else {
            enemy.checkColliding = false;
        }
    }

    /**
     * Check collision between character and endboss.
     */
    checkCollisionEndboss(endboss) {
        if (endboss.isColliding(this.character)) {
            endboss.checkColliding = true;
            this.checkCharacterIsAttackingEndboss(endboss);
        } else {
            endboss.checkColliding = false;
        }
        this.checkEndbossFollowsCharacter(endboss);
        if (this.character.isAttacking === true && this.character.isColliding(endboss)) {
            this.statusBarEndBoss.setPercentageEndboss(endboss.energyEndboss);
        }
    }

    /**
      * Check if the character is attacking the enemy.
      */
    checkCharacterIsAttackingEnemy(enemy) {
        if (this.character.isAttacking === true) {
            enemy.checkGettingAttacked = true;
            if (this.cheatActivated === false) {
                enemy.energyEnemy -= 10;
            } else if (this.cheatActivated === true) {
                enemy.energyEnemy -= 50;
            }
            if (enemy.energyEnemy <= 0) {
                this.enemy_dead.play();
                enemy.energyEnemy = 0;
            }
        } else {
            enemy.checkGettingAttacked = false;
            this.character.isAttacking = false;
        }
    }

    /**
     * Checks if the character is attacking the endboss.
     */
    checkCharacterIsAttackingEndboss(endboss) {
        if (this.character.isAttacking === true) {
            endboss.checkGettingAttacked = true;
            if (this.cheatActivated === false) {
                endboss.energyEndboss -= 10;
            } else if (this.cheatActivated === true) {
                endboss.energyEndboss -= 100;
            }
            if (endboss.energyEndboss <= 0) {
                endboss.energyEndboss = 0;
                this.enemy_dead.play();
                endboss.endbossIsDead = true;
            }
        } else {
            endboss.checkGettingAttacked = false;
            this.character.isAttacking = false;
        }
    }

    /**
    * Checks if enemies are following the character.
     */
    collisionEnemiesCharacter() {
        this.level.enemies.forEach((enemy) => {
            this.checkEnemyFollowsCharacter(enemy);
        });
    }

    /**
    * Checks if an enemy is positioned to the right or left of the character.
    */
    checkEnemyFollowsCharacter(enemy) {
        if (enemy.x > this.character.x) {
            enemy.checkFollowingLeft = true;
            enemy.checkFollowingRight = false;
        } else if (enemy.x < this.character.x) {
            enemy.checkFollowingLeft = false;
            enemy.checkFollowingRight = true;
        } else {
            enemy.checkFollowingLeft = false;
            enemy.checkFollowingRight = false;
        }
    }

    /**
     * Checks if the endboss is near the character.
     */
    checkEndbossFollowsCharacter(endboss) {
        if (endboss.endbossIsFollowingLeft(this.character)) {
            endboss.checkFollowingLeft = true;
            endboss.checkFollowingRight = false;
        } else if (endboss.endbossIsFollowingRight(this.character)) {
            endboss.checkFollowingLeft = false;
            endboss.checkFollowingRight = true;
        } else {
            endboss.checkFollowingLeft = false;
            endboss.checkFollowingRight = false;
        }
    }

    /**
    * Checks if an enemy or the endboss is affected by a magic ball.
    */
    collisionThrowableObjectWithEnemy() {
        this.throwableObjects.forEach((magicball) => {
            this.level.enemies.forEach((enemy) => {
                this.enemyIsThrownOff(enemy, magicball);
            })
            this.level.endboss.forEach((endboss) => {
                this.endbossIsThrownOff(endboss, magicball);
                this.statusBarEndBoss.setPercentageEndboss(endboss.energyEndboss);
            })
        });
    }

    /**
    * Checks if an enemy is thrown off by an object.
    * @param {Enemy} enemy - The enemy object.
    * @param {ThrowableObject} obj - The throwable object.
    */
    enemyIsThrownOff(enemy, obj) {
        if (obj.isColliding(enemy)) {
            enemy.enemyIsThrownOff = true;
            enemy.energyEnemy -= 5;
            this.enemy_hurting.play();
        } else {
            enemy.enemyIsThrownOff = false;
        }
    }

    /**
     * Checks if the endboss is thrown off by an object.
     * @param {Endboss} endboss - The endboss object.
     * @param {ThrowableObject} obj - The throwable object.
     */
    endbossIsThrownOff(endboss, obj) {
        if (obj.isColliding(endboss)) {
            endboss.enemyIsThrownOff = true;
            endboss.energyEndboss -= 4;
            this.enemy_hurting.play();
        } else {
            endboss.enemyIsThrownOff = false;
        }
    }

    /**
    * Checks if the character is collecting a coin.
    */
    collisionCoins() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.coin_sound.play();
                this.character.addItem('coin');
                this.coinsBar.setAmountCoins(this.collectedCoins.length + 1);
                this.character.removeItem(level1.coins, coin);
                this.collectedCoins.push(coin);
                this.unlockCheat.push(coin);
            }
        })
    }

    /**
     * Checks if the character is collecting a throwable object.
     */
    collisionSticks() {
        this.level.sticks.forEach((stick) => {
            if (this.character.isColliding(stick)) {
                this.throwable_object_sound.play();
                this.character.addItem('stick');
                this.sticksBar.setAmountSticks(this.collectedSticks.length + 1);
                this.character.removeItem(level1.sticks, stick);
                this.collectedSticks.push(stick);
            }
        })
    }

    /**
     * Checks if the character can throw a throwable object.
     */
    checkThrowObject() {
        for (let i = 0; i < this.collectedSticks.length; i++) {
            let throwableStick = this.collectedSticks[i];
            if (this.collectedSticks.length > 0 && this.keyboard.K && world.character.characterMovable === true) {
                this.throw_sound.play();
                throwableStick = new ThrowableObject(this.character.x + 25, this.character.y + 5);
                this.throwableObjects.push(throwableStick);
                this.collectedSticks.splice(i, 1);
                this.sticksBar.setAmountSticks(this.collectedSticks.length);
            }
        }
    }

    /**
     * Updates the visibility of the endboss status bar based on the characters distance from the endboss.
    */
    endbossStatusBarVisibility() {
        let distance = this.character.x - world.level.endboss[0].x;
        if (distance <= -500 || distance >= 500) {
            this.statusBarEndBoss.y == 500;
            this.statusBarEndBoss.updateStatusbarVisibility(500);
        } else {
            this.statusBarEndBoss.y = 0;
        }
    }

    /**
    * Draws the game elements on the canvas.
    */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjectsBack);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.fogs);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.sticks);
        this.addObjectsToMap(this.level.backgroundObjectsFront);
        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.statusBar);
        this.addToMap(this.sticksBar);
        this.addToMap(this.coinsBar);
        this.addToMap(this.statusBarEndBoss);

        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    /**
    * Adds an array of objects to the game map.
    * @param {Array} objects - The array of objects to be added to the map.
    */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    /**
    * Adds a game object to the map.
    * @param {GameObject} mo - The game object to be added to the map.
    */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);
        mo.drawFrameOnFollowingLeft(this.ctx);
        mo.drawFrameOnFollowingRight(this.ctx);

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    /**
    * Flips the image horizontally.
    * @param {GameObject} mo - The game object to have its image flipped.
    */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    /**
    * Restores the original image orientation.
    * @param {GameObject} mo - The game object to have its original image orientation restored.
    */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}