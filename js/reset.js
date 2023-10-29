/**
 * Resets the entire game state.
 */
function resetGame() {
    showMenu();
    resetCharacter();
    resetEnemies();
    resetCoins();
    resetMagicalBalls();
    resetHealth();
    resetEndboss();
    toggleVisibility('reloadGameId', false);
}

/**
 * Resets the character's attributes and position.
 */
function resetCharacter() {
    world.character.characterMovable = false;
    world.character.energyCharacter = 100;
    world.character.x = 200;
    world.character.y = 212;
    world.character.isAttacking = false;
    world.character.characterDied = false;
}

/**
 * Resets the enemies by initializing a new set of enemies.
 */
function resetEnemies() {
    resetEnemiesArray();
    resetEnemiesValues();
}

/**
 * Clears and refills the array of enemies.
 */
function resetEnemiesArray() {
    world.level.enemies.forEach((enemy) => {
        world.level.enemies.splice(enemy);
        world.level.enemies.push(new ManZombie());
        world.level.enemies.push(new ManZombie());
        world.level.enemies.push(new WomanZombie());
        world.level.enemies.push(new WomanZombie());
        world.level.enemies.push(new WildZombie());
        world.level.enemies.push(new WildZombie());
    });
}

/**
 * Resets the attributes and positions of all enemies.
 */
function resetEnemiesValues() {
    world.level.enemies.forEach((enemy) => {
        enemy.enemiesMovable = false;
        enemy.enemiesAttacking = false;
        enemy.energyEnemy = 50;
        enemy.x = Math.random() < 0.7 ? Math.random() * 1900 + 500 : Math.random() * 800 - 800;
        enemy.y = 205;
        enemy.energyEnemy = 50;
        enemy.offset = {
            top: 130 * 0.7,
            bottom: 130,
            left: 250 / 2,
            right: 250,
        }
        enemy.offsetOnFollowingLeft = {
            top: 130 * 0.7,
            bottom: 130,
            left: 0,
            right: 225,
        }
        enemy.offsetOnFollowingRight = {
            top: 130 * 0.7,
            bottom: 130,
            left: 225,
            right: 0,
        }
        enemy.width = 400;
        enemy.height = 250;
    });
}

/**
 * This function is to reset the endboss
 */
function resetEndboss() {
    resetEndbossArray();
    resetEndbossValues();
}

/**
 * Resets the end boss by initializing a new one.
 */
function resetEndbossArray() {
    world.level.endboss.forEach((endboss) => {
        world.level.endboss.splice(endboss);
        world.level.endboss.push(new Endboss());
    });
}

/**
 * Clears and refills the array of end bosses.
 */
function resetEndbossValues() {
    world.level.endboss.forEach((endboss) => {
        clearInterval(endboss.endbossInterval);
        endboss.endbossIsDead = false;
        endboss.energyEndboss = 100;
        endboss.y = 65;
        endboss.x = 2000;
        endboss.offset = {
            top: 230 * 0.7,
            bottom: 205,
            left: 550 / 2,
            right: 550,
        }
        endboss.offsetOnFollowingLeft = {
            top: 230 * 0.7,
            bottom: 205,
            left: 0,
            right: 400,
        }
        endboss.offsetOnFollowingRight = {
            top: 230 * 0.7,
            bottom: 205,
            left: 400,
            right: 0,
        }
        endboss.width = 700;
        endboss.height = 400;
    });
}

/**
 * Resets the coins attributes and positions.
 */
function resetCoins() {
    world.coinsBar.setAmountCoins(0);
    world.collectedCoins = [];
    world.level.coins = [];
    world.coins.x = 300 + Math.random() * 1700;
    world.coins.y = 390 - Math.random() * 200;
    world.level.coins.push(new Coins());
    world.level.coins.push(new Coins());
    world.level.coins.push(new Coins());
    world.level.coins.push(new Coins());
    world.level.coins.push(new Coins());
}

/**
 * Resets the throwable objects attributes and positions.
 */
function resetMagicalBalls() {
    world.throwableObjects = [];
    world.collectedSticks = [];
    world.level.sticks = [];
    world.magicalBalls.x = 300 + Math.random() * 1700;
    world.magicalBalls.y = 390 - Math.random() * 200;
    world.sticksBar.setAmountSticks(0);
    world.level.sticks.push(new Sticks());
    world.level.sticks.push(new Sticks());
    world.level.sticks.push(new Sticks());
    world.level.sticks.push(new Sticks());
    world.level.sticks.push(new Sticks());
}

/**
 * Resets the health bars to full.
 */
function resetHealth() {
    world.statusBar.setPercentage(100);
    world.statusBarEndBoss.setPercentageEndboss(100);
}