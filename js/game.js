/**
 * References.
 */
let canvas;
let world;
/**
 * Instance of the Keyboard class for handling user input.
 */
let keyboard = new Keyboard();
/**
 * Stores the entered cheat code.
 */
let enteredCode = "";
/**
 * Represents the current sound mute status.
 */
let isSoundMuted = true;
/**
 * Audio objects.
 */
let click_sound = new Audio('audio/click.wav');
let gameplay_sound = new Audio('audio/forest.wav');
let winning_sound = new Audio('audio/winning.mp3');
let losing_sound = new Audio('audio/losing.mp3');
let walking_sound = new Audio('audio/enemy_walk.wav');
let mystic_sound = new Audio('audio/mystic_sound.mp3');
let story_sound = new Audio('audio/story-alternative.mp3');
/**
 * Flag indicating whether the game is launched in fullscreen mode.
 */
let full = false;

/**
 * Initializes the game by setting up the canvas, creating the world, and configuring initial settings.
 */
function init() {
    const loading = document.getElementById('loader-id');
    loading.style.display = "block";
    canvas = document.getElementById('canvasId');
    world = new World(canvas, keyboard);
    notMovable();
    mobileButtons();
    isSoundMuted;
    loading.style.display = "none";
}

/**
 * Disables certain buttons and removes click event listeners.
 */
function disableBtns() {
    document.getElementById('enterFullscreen').disabled = true;
    document.getElementById('soundControllBtn').disabled = true;
    document.getElementById('cheatButtonId').disabled = true;
    document.getElementById('reloadGameId').disabled = true;
    document.getElementById('playAgainId').disabled = true;
    document.getElementById('playerinfo').onclick = null;
    document.getElementById('joystick').onclick = null;
    document.getElementById('about-me').onclick = null;
}

/**
 * Enables disabled buttons and restores click event listeners.
 */
function enableBtns() {
    document.getElementById('enterFullscreen').disabled = false;
    document.getElementById('soundControllBtn').disabled = false;
    document.getElementById('cheatButtonId').disabled = false;
    document.getElementById('reloadGameId').disabled = false;
    document.getElementById('playAgainId').disabled = false;
    document.getElementById('playerinfo').onclick = openPlayerinfo;
    document.getElementById('joystick').onclick = openControls;
    document.getElementById('about-me').onclick = openAbout;
}

/**
 * Starts the game, making the players movable and triggering relevant audio and visual effects.
 */
function startGame() {
    resetGame();
    disableBtns();
    resetCheatCode();
    click_sound.play();
    loading();
    setTimeout(() => {
        isMovable();
        startGameVisibilities();
        gameplay_sound.play();
        walking_sound.play();
        mystic_sound.play();
        enableBtns();
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
 * Enables character movement at the start of the game.
 */
function isMovable() {
    world.character.characterMovable = true;
    world.level.enemies.forEach((enemy) => {
        enemy.enemiesMovable = true;
        enemy.enemiesAttacking = true;
    });
}

/**
 * Disables character movement at the start of the game.
 */
function notMovable() {
    world.character.characterMovable = false;
    world.level.enemies.forEach((enemy) => {
        enemy.enemiesMovable = false;
        enemy.enemiesAttacking = false;
    });
}

/**
 * Handles the event when the character dies, triggering relevant actions and effects.
 */
function characterDied() {
    deadEndbossOrCharacterBehaviour();
    let losingScreen = document.getElementById('endScreenId');
    losingScreen.innerHTML = losing();
    losing_sound.play();
}

/**
 * Handles the event when the endboss dies, triggering relevant actions and effects.
 */
function endbossDied() {
    deadEndbossOrCharacterBehaviour();
    let endScreen = document.getElementById('endScreenId');
    endScreen.innerHTML = winning();
    winning_sound.play();
    unlockCheatCode();
}

/**
 * Common behavior for handling the death of either the character or the endboss.
 */
function deadEndbossOrCharacterBehaviour() {
    world.character.gameEnd = true;
    world.character.characterMovable = false;
    world.character.y = 5000;
    showMenu();
    toggleVisibility('reloadGameId', false);
    disableBtns();
    gameplay_sound.pause();
    walking_sound.pause();
    mystic_sound.pause();
    world.character.hurting_sound.pause();
    endScreenVisibilites();
    setTimeout(() => enableBtns(), 3000);
}

/**
 * Unlocks the cheat code if specific conditions are met.
 */
function unlockCheatCode() {
    if (world.unlockCheat.length >= 5) {
        toggleVisibility('cheatCodeVisbibleId', true);
    } else toggleVisibility('cheatCodeVisbibleId', false);
}

/**
 * Resets the cheat code input.
 */
function resetCheatCode() {
    world.unlockCheat = [];
}

/**
 * Returns the HTML content for the losing screen.
 */
function losing() {
    return /* html */ `
    <h1 class="endScreenText">YOU LOSE!<h1>
    <img src="img/9_menu/losingscreen.png">`
}

/**
 * Returns the HTML content for the winning screen.
 */
function winning() {
    return /* html */ `
    <h1 class="endScreenText">YOU WON!<h1>
    <h3 class="cheatCodeVisbible d-none" id="cheatCodeVisbibleId">Code: "1994"</h3>
    <img src="img/9_menu/winningscreen.png">`
}

/**
 * Checks the entered cheat code and activates the cheat if the correct code is entered.
 * @param {string} inputValue - The entered cheat code.
 */
function checkCheatCode(inputValue) {
    let cheatKeyword = "1994";
    if (inputValue === cheatKeyword) {
        world.cheatActivated = true;
        document.getElementById('cheatSuccessfullId').textContent = "Cheat is activated";
        checkCheatCodeVisibilites()
    }
}

/**
 * Adds a number to the cheat code input field.
 * @param {number} code - The number to add to the input field.
 */
function addNumberToInput(code) {
    click_sound.play();
    const inputField = document.getElementById('cheatInputFieldId');
    inputField.value += code;
    enteredCode += code;
    if (enteredCode.length === 4) {
        checkCheatCode(enteredCode);
    }
}

/**
 * Controls the volume of all game sounds, toggling between mute and unmute.
 */
function soundControl() {
    const allSounds = [
        click_sound, gameplay_sound,
        winning_sound, losing_sound, walking_sound,
        mystic_sound, story_sound, world.character.walking_sound, world.character.jumping_sound, world.character.hurting_sound, world.character.sword_sound, world.character.dead_sound, world.coin_sound, world.throwable_object_sound, world.enemy_hurting, world.enemy_dead, world.throw_sound
    ];

    allSounds.forEach(sound => {
        sound.volume = isSoundMuted ? 0 : 1.0;
    });
    changeSoundImage();
}

/**
 * Changes the sound control button image based on the mute status.
 */
function changeSoundImage() {
    isSoundMuted = !isSoundMuted;
    const soundControlButton = document.getElementById('soundControllBtn');
    if (isSoundMuted) {
        soundControlButton.innerHTML = '<img src="img/8_buttons/soundon.png">';
    } else {
        soundControlButton.innerHTML = '<img src="img/8_buttons/soundoff.png">';
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