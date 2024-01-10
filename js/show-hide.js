/**
 * Sets initial visibilities when the game starts.
 */
function startGameVisibilities() {
    toggleVisibility('menu', false);
    toggleVisibility('backToMenuId', false);
    toggleVisibility('cheatButtonId', false);
    toggleClass('gameContent', 'center', false);
    toggleClass('gameContent', 'menuFullscreen', false);
    toggleVisibility('canvasId', true);
    toggleVisibility('mobileButtonsId', true);
    toggleVisibility('reloadGameId', true);
    toggleVisibility('endScreenId', false);
}

/**
 * Enters fullscreen mode and adjusts element visibilities accordingly.
 */
function enterWindowMode() {
    full = true;
    toggleVisibility('enterFullscreen', false);
    toggleVisibility('closeFullscreen', true);
    toggleClass('gameContent', 'border', false);
    toggleClass('canvasId', 'canvasFullscreen', true);
    toggleClass('gameContent', 'menuFullscreen', true);
}

/**
 * Exits fullscreen mode and adjusts element visibilities accordingly.
 */
function closeWindowMode() {
    full = false;
    toggleVisibility('enterFullscreen', true);
    toggleVisibility('closeFullscreen', false);
    toggleClass('gameContent', 'border', true);
    toggleClass('canvasId', 'enterWindowMode', false);
    toggleClass('gameContent', 'menuFullscreen', false);
    toggleClass('canvasId', 'canvasFullscreen', false);
}

/**
 * Shows the game menu and adjusts element visibilities accordingly.
 */
function showMenu() {
    toggleVisibility('mobileButtonsId', false);
    toggleVisibility('controls', false);
    toggleVisibility('playerinfoDescription', false);
    toggleVisibility('backToMenuId', false);
    toggleVisibility('endScreenId', false);
    toggleVisibility('canvasId', false);
    toggleVisibility('playAgainId', false);
    toggleVisibility('menu', true);
    toggleClass('cheatId', 'd-none', true);
    toggleVisibility('cheatButtonId', true);
    toggleClass('gameContent', 'center', true);
    toggleVisibility('aboutId', false);
    if (full === true) {
        toggleClass('gameContent', 'menuFullscreen', true);
    } else
        toggleClass('gameContent', 'menuFullscreen', false);
    document.getElementById('cheatInputFieldId').value = '';
    enteredCode = "";
    story_sound.pause();
    story_sound.currentTime = 0;
}

/**
 * Sets visibilities for the end screen elements.
 */
function endScreenVisibilites() {
    toggleVisibility('playAgainId', true);
    toggleVisibility('endScreenId', true);
    toggleVisibility('reloadGameId', true);
    toggleVisibility('canvasId', false);
    toggleVisibility('menu', false);
    toggleVisibility('cheatButtonId', false);
    toggleVisibility('mobileButtonsId', false);
}

/**
 * Opens the player information overlay.
 */
function openPlayerinfo() {
    click_sound.play();
    toggleVisibility('playerinfoDescription', true);
    toggleVisibility('backToMenuId', true);
    toggleVisibility('cheatButtonId', false);
}

/**
 * Opens the controls overlay.
 */
function openControls() {
    click_sound.play();
    toggleVisibility('controls', true);
    toggleVisibility('backToMenuId', true);
    toggleVisibility('cheatButtonId', false);
}

/**
 * Opens the about overlay and plays a sound after a delay.
 */
function openAbout() {
    click_sound.play();
    setTimeout(() => {
        story_sound.play();
    }, 500);
    toggleVisibility('backToMenuId', true);
    toggleVisibility('aboutId', true);
    toggleVisibility('cheatButtonId', false);
}

/**
 * Sets visibilities for cheat-related elements.
 */
function cheatsVisibility() {
    toggleVisibility('menu', false);
    toggleVisibility('reloadGameId', false);
    toggleVisibility('endScreenId', false);
    toggleClass('cheatId', 'd-none', false);
    toggleVisibility('cheatButtonId', false);
    toggleVisibility('backToMenuId', true);
}

/**
 * Resets visibilities for cheat code input-related elements.
 */
function checkCheatCodeVisibilites() {
    toggleVisibility('cheatInputFieldId', false);
    document.querySelector('.cheatCodeNumbersContainer').innerHTML = "";
    document.querySelector('.howToGetCheatCode').innerHTML = "";
}