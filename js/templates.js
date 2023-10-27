/**
 * This function is used to show or hide id's
 */
function toggleVisibility(id, show) {
    const showHide = document.getElementById(id);
    showHide.classList.toggle('d-none', !show);
}

/**
 * This function is used to show or hide classes
 */
function toggleClass(id, setClass, shouldShow) {
    const showHide = document.getElementById(id);
    if (shouldShow) {
        showHide.classList.add(setClass);
    } else {
        showHide.classList.remove(setClass);
    }
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
});

document.addEventListener('DOMContentLoaded', function () {
    let toggleButton = document.getElementById('enterFullscreen');
    let closeButton = document.getElementById('closeFullscreen');

    toggleButton.addEventListener('click', toggleFullscreen);
    document.addEventListener('keydown', handleKeyPress);

    function toggleFullscreen() {
        if (isFullscreen()) {
            exitFullscreen();
        } else {
            enterFullscreen();
        }
    }

    function handleKeyPress(event) {
        if (event.key === 'Escape' && isFullscreen()) {
            exitFullscreen();
        }
    }

    document.addEventListener("fullscreenchange", updateButton);

    function updateButton(event) {
        toggleButton.classList.toggle('d-none', isFullscreen());
        closeButton.classList.toggle('d-none', !isFullscreen());

        if (isFullscreen()) {
            enterWindowMode();
        } else {
            closeWindowMode();
        }
    }
});

function isFullscreen() {
    return document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
}

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

function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
}
