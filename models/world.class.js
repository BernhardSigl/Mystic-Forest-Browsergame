class World {
    character = new Character();
    manZombie = new ManZombie();
    womanZombie = new WomanZombie();
    wildZombie = new WildZombie();
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
        this.collisionEnemies();
        this.collisionCoins();
        this.collisionSticks();
        this.collisionThrowableObjectWithEnemy();
    }

    collisionEnemies() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.damageEnemyToCharacter();
                if (this.character.isAboveGround() && this.character.speedY < 0) {
                    this.character.jump();
                }
                this.character.damageCharacterToEnemy(enemy);
                this.statusBar.setPercentage(this.character.energyCharacter);
            }
        });
    }

    collisionThrowableObjectWithEnemy() {
        this.throwableObjects.forEach((stick) => {
            this.level.enemies.forEach((enemy) => {
                if (stick.isColliding(enemy)) {
                    stick.throwableObjectsDamage(enemy);
                }
            })
        });
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
        this.addObjectsToMap(this.level.backgroundObjectsFront);

        this.addObjectsToMap(this.throwableObjects);

        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.sticks);

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