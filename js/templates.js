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