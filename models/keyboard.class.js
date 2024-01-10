class Keyboard {
    /**
     * State of the keys.
     */
    A = false;
    D = false;
    W = false;
    K = false;
    J = false;
}

/**
 * Event listener for keydown events to update the keyboard state.
 */
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

/**
 * Event listener for keyup events to update the keyboard state.
 */
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
});

/**
 * Function to set up touch event listeners for mobile buttons.
 */
function mobileButtons() {
    const options = { passive: false };

    document.getElementById('btnLeft').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.A = true;
    }, options);

    document.getElementById('btnLeft').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.A = false;
    }, options);

    document.getElementById('btnRight').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.D = true;
    }, options);

    document.getElementById('btnRight').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.D = false;
    }, options);

    document.getElementById('btnUp').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.W = true;
    }, options);

    document.getElementById('btnUp').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.W = false;
    }, options);

    document.getElementById('btnThrow').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.K = true;
    }, options);

    document.getElementById('btnThrow').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.K = false;
    }, options);

    document.getElementById('btnAttack').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.J = true;
    }, options);

    document.getElementById('btnAttack').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.J = false;
    }, options);
}
