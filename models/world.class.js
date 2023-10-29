class World {
    character = new Character();
    manZombie = new ManZombie();
    womanZombie = new WomanZombie();
    wildZombie = new WildZombie();
    endboss = new Endboss();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = -100;
    statusBar = new StatusBar();
    sticksBar = new SticksBar();
    coinsBar = new CoinsBar();
    statusBarEndBoss = new StatusBarEndBoss();
    coins = new Coins();
    magicalBalls = new Sticks();
    cheatActivated = false;

    throwableObjects = [];
    collectedCoins = [];
    collectedSticks = [];
    unlockCheat = [];
    enemiesArray = [];

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.lifeImagesrc = this.lifeImageSrc;
        this.run();
    }

    // pull keyboard
    setWorld() {
        this.character.world = this;
    }

    run() {
        this.runInterval = setInterval(() => {
            this.checkCollisions();
            this.checkThrowObject();
        }, 200);
    }

    checkCollisions() {
        this.loadEnemies();
        this.loadEndboss();
        this.collisionCoins();
        this.collisionSticks();
        this.collisionThrowableObjectWithEnemy();
        this.collisionEnemiesCharacter();
    }
    /**
     * This function is used to check if the effects due to collisions between character and enemies.
     */
    loadEnemies() {
        this.level.enemies.forEach((enemy) => {
            this.checkDamageToCharacter(enemy); // important
            this.checkCollisionEnemies(enemy);
        });
    }

    /**
     * This function is used to check if the effects due to collisions between character and endboss.
     */
    loadEndboss() {
        this.level.endboss.forEach((endboss) => {
            this.checkDamageToCharacter(endboss);  // important
            this.checkCollisionEndboss(endboss);
        });
    }

    /**
     * This function is to check the effects of opponent on character
     */
    checkDamageToCharacter(enemyOrEndboss) {  // important
        if (this.character.isColliding(enemyOrEndboss)) {
            this.character.damageObjectToCharacter();
            if (this.character.isAboveGround() && this.character.speedY < 0) {
                this.character.jump();
            }
            this.statusBar.setPercentage(this.character.energyCharacter);
        }
    }

    checkCollisionEnemies(enemy) {
        if (enemy.isColliding(this.character)) {
            enemy.checkColliding = true;
            this.checkCharacterIsAttackingEnemy(enemy);
        } else {
            enemy.checkColliding = false;
        }
    }

    /**
     * This function is used to check if a collision is happening
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
     * This function is used to check if the character is attacking
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
                enemy.energyEnemy = 0;
            }
        } else {
            enemy.checkGettingAttacked = false;
            this.character.isAttacking = false;
        }
    }

    /**
 * This function is used to check if the character is attacking
 */
    checkCharacterIsAttackingEndboss(endboss) {
        if (this.character.isAttacking === true) {
            endboss.checkGettingAttacked = true;
            if (this.cheatActivated === false) {
                endboss.energyEndboss -= 10;
            } else if (this.cheatActivated === true) {
                endboss.energyEndboss -= 100;
            }
            console.log(`enboss: `, endboss.energyEndboss);
            if (endboss.energyEndboss <= 0) {
                endboss.energyEndboss = 0;
                endboss.endbossIsDead = true;
            }
        } else {
            endboss.checkGettingAttacked = false;
            this.character.isAttacking = false;
        }
    }

    /**
     * This function is used to check if the enemy is following the character
     */
    collisionEnemiesCharacter() {
        this.level.enemies.forEach((enemy) => {
            this.checkEnemyFollowsCharacter(enemy);
            // this.checkJumpOnOpponent(enemy);
        });
    }

    /**
     * This function is used to check if the enemy is right or left to the character
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
    * This function is used to check if the endboss is near to the character
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
     * This function is used to check if the enemy or the endboss is thrown off by an magic-ball
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
     * This function is used to check if an opponent is thrown off by an object
     */
    enemyIsThrownOff(enemy, obj) {
        if (obj.isColliding(enemy)) {
            enemy.enemyIsThrownOff = true;
            enemy.energyEnemy -= 5;
            console.log(`energyEnemy: `, enemy.energyEnemy);
        } else {
            enemy.enemyIsThrownOff = false;
        }
    }

    endbossIsThrownOff(endboss, obj) {
        if (obj.isColliding(endboss)) {
            endboss.enemyIsThrownOff = true;
            endboss.energyendboss -= 5;
            console.log(`energyEndboss: `, endboss.energyEnemy);
        } else {
            endboss.enemyIsThrownOff = false;
        }
    }

    /**
     * This function is used to check if the character is collecting a coin
     */
    collisionCoins() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.character.addItem('coin');
                this.coinsBar.setAmountCoins(this.collectedCoins.length + 1);
                this.character.removeItem(level1.coins, coin);
                this.collectedCoins.push(coin);
                this.unlockCheat.push(coin);
            }
        })
    }

    /**
    * This function is used to check if the character is collecting a throwable object
    */
    collisionSticks() {
        this.level.sticks.forEach((stick) => {
            if (this.character.isColliding(stick)) {
                this.character.addItem('stick');
                this.sticksBar.setAmountSticks(this.collectedSticks.length + 1);
                this.character.removeItem(level1.sticks, stick);
                this.collectedSticks.push(stick);
            }
        })
    }

    /**
     * This function is used to check if the character is able to throw a throwable object
     */
    checkThrowObject() {
        for (let i = 0; i < this.collectedSticks.length; i++) {
            let throwableStick = this.collectedSticks[i];
            if (this.collectedSticks.length > 0 && this.keyboard.K && world.character.characterMovable === true) {
                throwableStick = new ThrowableObject(this.character.x + 25, this.character.y + 5);
                this.throwableObjects.push(throwableStick);
                this.collectedSticks.splice(i, 1);
                this.sticksBar.setAmountSticks(this.collectedSticks.length);
            }
        }
    }

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

        // Draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

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

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}