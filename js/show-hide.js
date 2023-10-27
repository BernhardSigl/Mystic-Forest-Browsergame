/**
 * This function is to show or hide elements if the game starts
 */
function startGameVisibilities() {
    toggleVisibility('menu', false);
    toggleVisibility('backToMenuId', false);
    toggleVisibility('cheatButtonId', false);
    toggleVisibility('reloadGameId', true);
    toggleVisibility('canvasId', true);
    toggleClass('fullscreenContent', 'center', false);
    toggleClass('fullscreenContent', 'menuFullscreen', false);
}

function fullscreen() {
    full = true;
    toggleClass('closeFullscreen', 'd-none', false);
    toggleClass('fullscreenContent', 'border', false);
    toggleClass('fullscreenContent', 'enterFullscreen', true);
    toggleClass('enterFullscreen', 'd-none', true);
    toggleClass('canvasId', 'canvasFullscreen', true);
    toggleClass('fullscreenContent', 'menuFullscreen', true);
}

function closeFullscreen() {
    full = false;
    toggleClass('closeFullscreen', 'd-none', true);
    toggleClass('fullscreenContent', 'border', true);
    toggleClass('enterFullscreen', 'd-none', false);
    toggleClass('canvasId', 'enterFullscreen', false);
    toggleClass('fullscreenContent', 'menuFullscreen', false);
    toggleClass('canvasId', 'canvasFullscreen', false);
}

function showMenu() {
    toggleVisibility('controls', false);
    toggleVisibility('playerinfoDescription', false);
    toggleVisibility('backToMenuId', false);
    toggleVisibility('endScreenId', false);
    toggleVisibility('canvasId', false);
    toggleVisibility('playAgainId', false);
    toggleVisibility('menu', true);
    toggleClass('cheatId', 'd-none', true);
    toggleVisibility('cheatButtonId', true);
    toggleClass('fullscreenContent', 'center', true);
    if (full === true) {
        toggleClass('fullscreenContent', 'menuFullscreen', true);
    } else
        toggleClass('fullscreenContent', 'menuFullscreen', false);
}

function endScreenVisibilites() {
    toggleVisibility('playAgainId', true);
    toggleVisibility('endScreenId', true);
    toggleVisibility('reloadGameId', true);
    toggleVisibility('canvasId', false);
    toggleVisibility('menu', false);
    toggleVisibility('cheatButtonId', false);
}

function openPlayerinfo() {
    toggleVisibility('playerinfoDescription', true);
    toggleVisibility('backToMenuId', true);
    toggleVisibility('cheatButtonId', false);
}

function openControls() {
    toggleVisibility('controls', true);
    toggleVisibility('backToMenuId', true);
    toggleVisibility('cheatButtonId', false);
}