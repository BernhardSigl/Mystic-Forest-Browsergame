/**
 * This function is to reset the hole game
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
 * This function is to reset the character
 */
function resetCharacter() {
    world.character.characterMovable = false;
    world.character.energyCharacter = 100;
    world.character.x = 0;
    world.character.y = 212;
    world.character.isAttacking = false;
    world.character.characterDied = false;
}

/**
 * This function is to reset the enemies
 */
function resetEnemies() {
    world.level.enemies.forEach((enemy) => {
        enemy.enemiesMovable = false;
        enemy.enemiesAttacking = false;
        enemy.energyEnemy = 50;
        enemy.x = Math.random() < 0.6 ? Math.random() * 2000 + 300 : Math.random() * 900 - 1000;
        enemy.y = 205;
    });
}

/**
 * This function is to reset the endboss
 */
function resetEndboss() {
    world.level.endboss.forEach((endboss) => {
        endboss.energyEndboss = 100;
        endboss.x = 2000;
        endboss.y = 65;
    });
}

/**
 * This function is to reset the coins
 */
function resetCoins() {
    world.coinsBar.setAmountCoins(0);
    world.collectedCoins = [];
    world.coins.x = 200 + Math.random() * 2000;
    world.coins.y = 345 - Math.random() * 200;
    if (world.level.coins.length < 5) {
        world.level.coins.push(new Coins());
    }
}

/**
 * This function is to reset the throwable object
 */
function resetMagicalBalls() {
    world.throwableObjects = [];
    world.collectedSticks = [];
    world.magicalBalls.x = 200 + Math.random() * 2000;
    world.magicalBalls.y = 385 - Math.random() * 200;
    world.sticksBar.setAmountSticks(0);
    if (world.level.sticks.length < 5) {
        world.level.sticks.push(new Sticks());
    }
}

/**
 * This function is to reset the health-bars
 */
function resetHealth() {
    world.statusBar.setPercentage(100);
    world.statusBarEndBoss.setPercentageEndboss(100);
}