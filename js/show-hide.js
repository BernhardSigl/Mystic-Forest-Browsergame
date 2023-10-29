/**
 * This function is to show or hide elements if the game starts
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
}

function enterWindowMode() {
    full = true;
    toggleVisibility('enterFullscreen', false);
    toggleVisibility('closeFullscreen', true);
    toggleClass('gameContent', 'border', false);
    toggleClass('canvasId', 'canvasFullscreen', true);
    toggleClass('gameContent', 'menuFullscreen', true);
}

function closeWindowMode() {
    full = false;
    toggleVisibility('enterFullscreen', true);
    toggleVisibility('closeFullscreen', false);
    toggleClass('gameContent', 'border', true);
    toggleClass('canvasId', 'enterWindowMode', false);
    toggleClass('gameContent', 'menuFullscreen', false);
    toggleClass('canvasId', 'canvasFullscreen', false);
}

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
    if (full === true) {
        toggleClass('gameContent', 'menuFullscreen', true);
    } else
        toggleClass('gameContent', 'menuFullscreen', false);
    document.getElementById('cheatInputFieldId').value = '';
    enteredCode = "";
}

function endScreenVisibilites() {
    toggleVisibility('playAgainId', true);
    toggleVisibility('endScreenId', true);
    toggleVisibility('reloadGameId', true);
    toggleVisibility('canvasId', false);
    toggleVisibility('menu', false);
    toggleVisibility('cheatButtonId', false);
    toggleVisibility('mobileButtonsId', false);
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

function cheatsVisibility() {
    toggleVisibility('menu', false);
    toggleVisibility('reloadGameId', false);
    toggleVisibility('endScreenId', false);
    toggleClass('cheatId', 'd-none', false);
    toggleVisibility('cheatButtonId', false);
    toggleVisibility('backToMenuId', true);
}

function checkCheatCodeVisibilites() {
    toggleVisibility('cheatInputFieldId', false);
    document.querySelector('.cheatCodeNumbersContainer').innerHTML = "";
    document.querySelector('.howToGetCheatCode').innerHTML = "";
}