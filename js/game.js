let canvas;
let world;
let keyboard = new Keyboard();

function init() {
    canvas = document.getElementById('canvasId');
    world = new World(canvas, keyboard);
    // setInterval(() => {
    if (world.character.energyCharacter === 0) {
        characterDied();
    }
    // else if (world.level.endboss[0].energyEndboss === 0) {
    //     endbossDied();
    // }
    // }, 1000);
}

// function setStoppableInterval(fn, time) {
//     let id = setInterval(fn, time);
//     intervalIds.push(id);
// }

// function stopGame() {
//     intervalIds.forEach(clearInterval);
// }
async function startGame() {
    toggleVisibility('menu', false);
    toggleVisibility('canvasId', true);
    // clearAllIntervals();
}

function clearAllIntervals() {
    for (let i = 1; i < 9999; i++)
        window.clearInterval(i);
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

function fullscreen() {
    enterFullscreen(document.getElementById('fullscreen'));
    document.getElementById('canvasId').classList.add('enterFullscreen');
    document.getElementById('closeFullscreen').classList.remove('d-none');
    document.getElementById('enterFullscreen').classList.add('d-none');
}

function closeFullscreen() {
    exitFullscreen(document.getElementById('fullscreen'));
    document.getElementById('canvasId').classList.remove('enterFullscreen');
    document.getElementById('closeFullscreen').classList.add('d-none');
    document.getElementById('enterFullscreen').classList.remove('d-none');
}

function enterFullscreen(element) {
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
    }
}

function toggleVisibility(id, show) {
    const showHide = document.getElementById(id);
    showHide.classList.toggle('d-none', !show);
}

function openPlayerinfo() {
    toggleVisibility('playerinfoDescription', true);
    toggleVisibility('backToMenuId', true);
}

function openControls() {
    toggleVisibility('controls', true);
    toggleVisibility('backToMenuId', true);
}

function backToMenu() {
    toggleVisibility('controls', false);
    toggleVisibility('playerinfoDescription', false);
    toggleVisibility('backToMenuId', false);
    toggleVisibility('winning', false);
    toggleVisibility('menu', true);
}

function characterDied() {
    world.character.energyCharacter = 100;
    toggleVisibility('winning', true);
    toggleVisibility('backToMenuId', true);
    toggleVisibility('canvasId', false);
    document.getElementById('winning').innerHTML = /* html */ `
    <h1 class="endScreenText">YOU WON!<h1>
    <img src="img/9_menu/winningscreen.png">
`
}




