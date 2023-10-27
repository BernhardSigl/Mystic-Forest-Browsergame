let canvas;
let world;
let keyboard = new Keyboard();

/**
 * if you launch the game-url fullscreen is false
 */
let full = false;

function init() {
    canvas = document.getElementById('canvasId');
    world = new World(canvas, keyboard);
    notMovable();
    resetGame();
    mobileButtons();
}

/**
 * This function is used to make the players movable
 */
function startGame() {
    loading();
    setTimeout(() => {
        resetGame();
        isMovable();
        startGameVisibilities();
    }, 3000);
}

function loading() {
    toggleClass('loadingId', 'd-none', false);
    setTimeout(() => {
        toggleClass('loadingId', 'd-none', true);
    }, 3000);
}

/**
 * This function is used to make the character movable if the game starts
 */
function isMovable() {
    world.character.characterMovable = true;
    world.level.enemies.forEach((enemy) => {
        enemy.enemiesMovable = true;
        enemy.enemiesAttacking = true;
    });
}

/**
 * This function is used to make the character unmovable if the game starts
 */
function notMovable() {
    world.character.characterMovable = false;
    world.level.enemies.forEach((enemy) => {
        enemy.enemiesMovable = false;
        enemy.enemiesAttacking = false;
    });
}

function characterDied() {
    resetGame();
    endScreenVisibilites();
    let losingScreen = document.getElementById('endScreenId');
    losingScreen.innerHTML = losing();
}

function endbossDied() {
    resetGame();
    endScreenVisibilites();
    let endScreen = document.getElementById('endScreenId');
    endScreen.innerHTML = winning();
}

function losing() {
    return /* html */ `
    <h1 class="endScreenText">YOU LOSE!<h1>
    <img src="img/9_menu/losingscreen.png">`
}

function winning() {
    return /* html */ `
    <h1 class="endScreenText">YOU WON!<h1>
    <img src="img/9_menu/winningscreen.png">`
}

function checkCheatCode(inputValue) {
    let cheatKeyword = "godmode";
    if (inputValue === cheatKeyword) {
        world.cheatActivated = true;
        document.getElementById('cheatSuccessfullId').textContent = "Cheat is activated";
        toggleVisibility('cheatInputFieldId', false);
    }
}

function checkOrientation() {
    if (window.matchMedia("(orientation: landscape)").matches) {
        if (window.innerHeight < 480) {
            newHeight = window.innerHeight;
            document.getElementById('canvas').style.height = `${newHeight}px`;
        }
    }
    else {
        document.getElementById('canvas').style.height = `100%`;
    }
}