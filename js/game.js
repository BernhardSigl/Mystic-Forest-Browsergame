let canvas;
let world;
let keyboard = new Keyboard();
let enteredCode = "";
let isSoundMuted = true;
let click_sound = new Audio('audio/click.wav');
let gameplay_sound = new Audio('audio/forest.wav');
let winning_sound = new Audio('audio/winning.mp3');
let losing_sound = new Audio('audio/losing.mp3');
let walking_sound = new Audio('audio/enemy_walk.wav');
let mystic_sound = new Audio('audio/mystic_sound.mp3');
let story_sound = new Audio('audio/story-alternative.mp3');

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
    isSoundMuted;
}

/**
 * This function is used to make the players movable
 */
function startGame() {
    click_sound.play();
    loading();
    setTimeout(() => {
        resetGame();
        isMovable();
        startGameVisibilities();
        gameplay_sound.play();
        walking_sound.play();
        mystic_sound.play();
    }, 3000);
    setInterval(() => {
        world.endbossStatusBarVisibility();
    }, 1000);
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
    gameplay_sound.pause();
    walking_sound.pause();
    mystic_sound.pause();
    losing_sound.play();
}

function endbossDied() {
    let endScreen = document.getElementById('endScreenId');
    endScreen.innerHTML = winning();
    gameplay_sound.pause();
    walking_sound.pause();
    mystic_sound.pause();
    unlockCheatCode();
    resetGame();
    endScreenVisibilites();
    winning_sound.play();
}

function unlockCheatCode() {
    if (world.unlockCheat.length >= 5) {
        toggleVisibility('cheatCodeVisbibleId', true);
    } else toggleVisibility('cheatCodeVisbibleId', false);
}

function resetCheatCode() {
    world.unlockCheat = [];
}

function losing() {
    return /* html */ `
    <h1 class="endScreenText">YOU LOSE!<h1>
    <img src="img/9_menu/losingscreen.png">`
}

function winning() {
    return /* html */ `
    <h1 class="endScreenText">YOU WON!<h1>
    <h3 class="cheatCodeVisbible d-none" id="cheatCodeVisbibleId">Code: "1994"</h3>
    <img src="img/9_menu/winningscreen.png">`
}

function checkCheatCode(inputValue) {
    let cheatKeyword = "1994";
    if (inputValue === cheatKeyword) {
        world.cheatActivated = true;
        document.getElementById('cheatSuccessfullId').textContent = "Cheat is activated";
        checkCheatCodeVisibilites()
    }
}

function addNumberToInput(code) {
    click_sound.play();
    const inputField = document.getElementById('cheatInputFieldId');
    inputField.value += code;
    enteredCode += code;
    if (enteredCode.length === 4) {
        checkCheatCode(enteredCode);
    }
}

function soundControl() {
    const allSounds = [
        click_sound, gameplay_sound,
        winning_sound, losing_sound, walking_sound,
        mystic_sound, story_sound
    ];

    allSounds.forEach(sound => {
        sound.volume = isSoundMuted ? 0 : 1.0;
    });

    isSoundMuted = !isSoundMuted;
    const soundControlButton = document.getElementById('soundControllBtn');
    if (isSoundMuted) {
        soundControlButton.innerHTML = '<img src="img/8_buttons/soundoff.png">';
    } else {
        soundControlButton.innerHTML = '<img src="img/8_buttons/soundon.png">';
    }
}

/**
 * Fullscreen in opera browser
 */
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