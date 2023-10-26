let canvas;
let world;
let keyboard = new Keyboard();
let intervalIds = [];
let full = false;

function init() {
    canvas = document.getElementById('canvasId');
    world = new World(canvas, keyboard);
    world.character.characterMovable = false;
    world.level.enemies.forEach((enemy) => {
        enemy.enemiesMovable = false;
    });
}

/**
 * This function is used to make the character movable if the game starts
 */
function startGame() {
    resetGame();
    world.character.characterMovable = true;
    world.level.enemies.forEach((enemy) => {
        enemy.enemiesMovable = true;
    });
    startGameVisibilities();
}

/**
 * This function is to show or hide elements if the game starts
 */
function startGameVisibilities() {
    toggleVisibility('menu', false);
    toggleVisibility('backToMenuId', false);
    toggleVisibility('reloadGameId', true);
    toggleVisibility('canvasId', true);
    document.getElementById('fullscreenContent').classList.remove('center');
    document.getElementById('fullscreenContent').classList.remove('menuFullscreen');
}

function setStoppableInterval(fn, time) {
    let id = setInterval(fn, time);
    intervalIds.push(id);
}

function stopGame() {
    intervalIds.forEach(clearInterval);
    // for (let i = 1; i < 9999; i++) window.clearInterval(i);
}

/**
 * This function is to reset the hole game
 */
function resetGame() {
    toggleVisibility('reloadGameId', false);
    showMenu();
    resetCharacter();
    resetEnemies();
    resetObjects();
    resetEndboss();
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
        enemy.energyEnemy = 50;
        enemy.x = Math.random() < 0.6 ? Math.random() * 2000 + 300 : Math.random() * 900 - 1000;
        console.log(Math.random());
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
 * This function is to reset the objects
 */
function resetObjects() {
    resetCoins();
    resetMagicalBalls();
    resetHealth();
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
 * This function is to reset the health-bar
 */
function resetHealth() {
    world.statusBar.setPercentage(100);
}

window.addEventListener('keydown', (e) => {
    if (e.keyCode == 65) {
        keyboard.A = true;
    }
    if (e.keyCode == 68) {
        keyboard.D = true;
    }
    if (e.keyCode == 87) {
        keyboard.W = true;
    }
    if (e.keyCode == 75) {
        keyboard.K = true;
    }
    if (e.keyCode == 74) {
        keyboard.J = true;
    }
    // console.log(e.keyCode);
})

window.addEventListener('keyup', (e) => {
    if (e.keyCode == 65) {
        keyboard.A = false;
    }
    if (e.keyCode == 68) {
        keyboard.D = false;
    }
    if (e.keyCode == 87) {
        keyboard.W = false;
    }
    if (e.keyCode == 75) {
        keyboard.K = false;
    }
    if (e.keyCode == 74) {
        keyboard.J = false;
    }
})

function fullscreen() {
    full = true;
    document.getElementById('closeFullscreen').classList.remove('d-none');
    document.getElementById('fullscreenContent').classList.remove('border');
    document.getElementById('fullscreenContent').classList.add('enterFullscreen');
    document.getElementById('enterFullscreen').classList.add('d-none');
    document.getElementById('canvasId').classList.add('canvasFullscreen');
    document.getElementById('fullscreenContent').classList.add('menuFullscreen');
}

function closeFullscreen() {
    full = false;
    document.getElementById('canvasId').classList.remove('enterFullscreen');
    document.getElementById('closeFullscreen').classList.add('d-none');
    document.getElementById('fullscreenContent').classList.add('border');
    document.getElementById('enterFullscreen').classList.remove('d-none');
    document.getElementById('canvasId').classList.remove('canvasFullscreen');
    document.getElementById('fullscreenContent').classList.remove('menuFullscreen');
}

// function enterFullscreenCustom(element) {
//     if (element.requestFullscreen) {
//         element.requestFullscreen();
//     } else if (element.msRequestFullscreen) {
//         element.msRequestFullscreen();
//     } else if (element.webkitRequestFullscreen) {
//         element.webkitRequestFullscreen();
//     }
// }

// function enterFullscreen(element) {
//     full = true;
//     if (element.requestFullscreen) {
//         element.requestFullscreen();
//     } else if (element.msRequestFullscreen) {
//         element.msRequestFullscreen();
//     } else if (element.webkitRequestFullscreen) {
//         element.webkitRequestFullscreen();
//     }
// }

function toggleVisibility(id, show) {
    const showHide = document.getElementById(id);
    showHide.classList.toggle('d-none', !show);
}

function showMenu() {
    toggleVisibility('controls', false);
    toggleVisibility('playerinfoDescription', false);
    toggleVisibility('backToMenuId', false);
    toggleVisibility('winningScreenId', false);
    toggleVisibility('canvasId', false);
    toggleVisibility('menu', true);
    document.getElementById('fullscreenContent').classList.add('center');
    if (full === true) {
        document.getElementById('fullscreenContent').classList.add('menuFullscreen');
    } else {
        document.getElementById('fullscreenContent').classList.remove('menuFullscreen');
    }
}

function openPlayerinfo() {
    toggleVisibility('playerinfoDescription', true);
    toggleVisibility('backToMenuId', true);
}

function openControls() {
    toggleVisibility('controls', true);
    toggleVisibility('backToMenuId', true);
}

function characterDied() {
    toggleVisibility('reloadGameId', true);
    toggleVisibility('canvasId', false);
    toggleVisibility('winningScreenId', true);
    document.getElementById('winningScreenId').innerHTML = /* html */ `
    <h1 class="endScreenText">YOU WON!<h1>
    <img src="img/9_menu/winningscreen.png">
`
}

function endbossDied() {
    toggleVisibility('winningScreenId', true);
    toggleVisibility('backToMenuId', true);
    toggleVisibility('canvasId', false);
    document.getElementById('winningScreenId').innerHTML = /* html */ `
    <h1 class="endScreenText">YOU WON!<h1>
    <img src="img/9_menu/winningscreen.png">
`
}
