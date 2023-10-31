/**
 * Toggles the visibility of an HTML element based on its ID.
 * @param {string} id - The ID of the HTML element.
 * @param {boolean} show - A flag indicating whether to show or hide the element.
 */
function toggleVisibility(id, show) {
    const showHide = document.getElementById(id);
    showHide.classList.toggle('d-none', !show);
}

/**
 * Toggles the presence of a class on an HTML element based on its ID.
 * @param {string} id - The ID of the HTML element.
 * @param {string} setClass - The class to add or remove.
 * @param {boolean} shouldShow - A flag indicating whether to add or remove the class.
 */
function toggleClass(id, setClass, shouldShow) {
    const showHide = document.getElementById(id);
    if (shouldShow) {
        showHide.classList.add(setClass);
    } else {
        showHide.classList.remove(setClass);
    }
}

/**
 * Event listener for DOMContentLoaded, sets up event listeners for fullscreen handling.
 */
document.addEventListener('DOMContentLoaded', function () {
    let toggleButton = document.getElementById('enterFullscreen');
    let closeButton = document.getElementById('closeFullscreen');

    toggleButton.addEventListener('click', toggleFullscreen);
    document.addEventListener('keydown', handleKeyPress);
    document.addEventListener("fullscreenchange", updateButton);

    /**
     * Toggles fullscreen state based on current state.
     */
    function toggleFullscreen() {
        if (isFullscreen()) {
            exitFullscreen();
        } else {
            enterFullscreen();
        }
    }

    /**
     * Handles keypress events, exits fullscreen on 'Escape' key if in fullscreen.
     *
     * @param {KeyboardEvent} event - The keypress event.
     */
    function handleKeyPress(event) {
        if (event.key === 'Escape' && isFullscreen()) {
            exitFullscreen();
        }
    }

    /**
     * Updates the fullscreen toggle button based on the current fullscreen state.
     */
    function updateButton() {
        toggleButton.classList.toggle('d-none', isFullscreen());
        closeButton.classList.toggle('d-none', !isFullscreen());

        if (isFullscreen()) {
            enterWindowMode();
        } else {
            closeWindowMode();
        }
    }
});

/**
 * Checks if the game is in fullscreen mode.
 *
 */
function isFullscreen() {
    return document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
}

/**
 * Requests fullscreen mode.
 */
function enterFullscreen() {
    const element = document.getElementById('fullscreen');
    if (element.requestFullscreen) {
        element.requestFullscreen();
    } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
    } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
    }
}

/**
 * Exits fullscreen mode.
 */
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}
