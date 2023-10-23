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

    throwableObjects = [];
    collectedCoins = [];
    collectedSticks = [];

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
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObject();
        }, 200);
    }

    checkCollisions() {
        this.collisionsEnemies();
        this.collisionsEndboss();
        this.collisionCoins();
        this.collisionSticks();
        this.collisionThrowableObjectWithEnemy();
        this.collisionEnemiesCharacter();
        this.collisionEndbossCharacter();
    }
    /**
     * This function is used to check if the effects due to collisions between character and enemies.
     */
    collisionsEnemies() {
        this.level.enemies.forEach((enemy) => {
            this.checkDamageToCharacter(enemy);
            this.checkGenerallyCollision(enemy);
            this.checkCharacterIsAttacking(enemy);
        });
    }

    /**
     * This function is used to check if the effects due to collisions between character and endboss.
     */
    collisionsEndboss() {
        this.level.endboss.forEach((endboss) => {
            this.checkDamageToCharacter(endboss);
            this.checkGenerallyCollision(endboss);
            this.checkCharacterIsAttacking(endboss);
        });
    }

    /**
     * This function is to check the effects of opoonents on character
     */
    checkDamageToCharacter(obj) {
        if (this.character.isColliding(obj)) {
            this.character.damageObjectToCharacter();
            if (this.character.isAboveGround() && this.character.speedY < 0) {
                this.character.jump();
            }
            this.statusBar.setPercentage(this.character.energyCharacter);
        }
    }

    /**
     * This function is used to check if a collision is happening
     */
    checkGenerallyCollision(obj) {
        if (obj.isColliding(this.character)) {
            obj.checkColliding = true;
        } else {
            obj.checkColliding = false;
        }
    }

    /**
     * This function is used to check if the character is attacking
     */
    checkCharacterIsAttacking(obj) {
        if (this.character.isAttacking === true) {
            obj.checkGettingAttacked = true;
            obj.energyEnemy -= 1;
            if (obj.energyEnemy <= 0) {
                obj.energyEnemy = 0;
            }
        } else {
            obj.checkGettingAttacked = false;
            this.character.isAttacking = false;
        }
    }

    /**
     * This function is used to check if the enemy is following the character
     */
    collisionEnemiesCharacter() {
        this.level.enemies.forEach((enemy) => {
            this.checkObjectFollowsCharacter(enemy);
            this.checkJumpOnOpponent(enemy);
        });
    }

    /**
      * This function is used to check if the endboss is following the character
      */
    collisionEndbossCharacter() {
        this.level.endboss.forEach((endboss) => {
            this.checkObjectFollowsCharacter(endboss);
            this.checkJumpOnOpponent(endboss);
        });
    }

    checkJumpOnOpponent(opponent) {
        if (this.character.isAboveGround() && this.character.speedY < 0) {
            opponent.charackterIsJumpingOnOpponent = true;
        }
    }

    /**
    * This function is used to check if an object is following the character
    */
    checkObjectFollowsCharacter(obj) {
        if (obj.isFollowingLeft(this.character)) {
            obj.checkFollowingLeft = true;
            obj.checkFollowingRight = false;
        } else if (obj.isFollowingRight(this.character)) {
            obj.checkFollowingLeft = false;
            obj.checkFollowingRight = true;
        } else {
            obj.checkFollowingLeft = false;
            obj.checkFollowingRight = false;
        }
    }

    /**
     * This function is used to check if the enemy or the endboss is thrown off by an magic-ball
     */
    collisionThrowableObjectWithEnemy() {
        this.throwableObjects.forEach((magicball) => {
            this.level.enemies.forEach((enemy) => {
                this.objectIsThrownOff(enemy, magicball);
            })
            this.level.endboss.forEach((endboss) => {
                this.objectIsThrownOff(endboss, magicball);
            })
        });
    }

    /**
     * This function is used to check if an opponent is thrown off by an object
     */
    objectIsThrownOff(opponent, obj) {
        if (obj.isColliding(opponent)) {
            opponent.enemyIsThrownOff = true;
        } else {
            opponent.enemyIsThrownOff = false;
        }
    }

    collisionCoins() {
        this.level.coins.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.character.addItem('coin');
                this.coinsBar.setAmountCoins(this.collectedCoins.length + 1);
                this.character.removeItem(level1.coins, coin);
                this.collectedCoins.push(coin);
            }
        })
    }

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

        // bars
        this.addToMap(this.statusBar);
        this.addToMap(this.sticksBar);
        this.addToMap(this.coinsBar);

        // this.drawDeathMessage();

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

    // drawDeathMessage() {
    //     // Zeichne die Todesnachricht im Canvas
    //     this.ctx.fillStyle = 'red';
    //     this.ctx.font = '30px Arial';
    //     this.ctx.fillText('Game Over', 200, 200);
    // }
}