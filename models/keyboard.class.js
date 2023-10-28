class Keyboard {
    A = false;
    D = false;
    W = false;
    K = false;
    J = false;
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
    console.log(e.keyCode);
});

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

function mobileButtons() {
    document.getElementById('btnLeft').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.A = true;
        console.log(this.A);
    });
    document.getElementById('btnLeft').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.A = false;
    });
    document.getElementById('btnRight').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.D = true;
    });

    document.getElementById('btnRight').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.D = false;
    });

    document.getElementById('btnUp').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.W = true;
    });

    document.getElementById('btnUp').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.W = false;
    });

    document.getElementById('btnThrow').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.K = true;
    });

    document.getElementById('btnThrow').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.K = false;
    });

    document.getElementById('btnAttack').addEventListener('touchstart', (e) => {
        e.preventDefault();
        keyboard.J = true;
    });

    document.getElementById('btnAttack').addEventListener('touchend', (e) => {
        e.preventDefault();
        keyboard.J = false;
    });
}