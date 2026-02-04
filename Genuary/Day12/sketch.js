// GENUARY DAY 12: Boxes only

let DESSIN = 112;
let NP = 480, PI = Math.PI;

function setup() {
    INIT();
    PALETTE("YELLOW");

    // Random composition of 3D-looking boxes (isometric or perspective)

    let numBoxes = 20;

    for (let i = 0; i < numBoxes; i++) {
        let x = random(50, NP - 50);
        let y = random(50, NP - 50);
        let w = random(20, 60);
        let h = random(20, 60);
        let d = random(10, 30);

        // Front face
        drawRect(x, y, w, h);
        // Top face
        LPRINT(`M${int(x)},${int(y)}`);
        LPRINT(`D${int(x + d)},${int(y - d)}`);
        LPRINT(`D${int(x + w + d)},${int(y - d)}`);
        LPRINT(`D${int(x + w)},${int(y)}`);
        // Side face
        LPRINT(`M${int(x + w)},${int(y)}`);
        LPRINT(`D${int(x + w + d)},${int(y - d)}`);
        LPRINT(`D${int(x + w + d)},${int(y + h - d)}`);
        LPRINT(`D${int(x + w)},${int(y + h)}`);
    }

    TRACE();
}

function drawRect(x, y, w, h) {
    LPRINT(`M${int(x)},${int(y)}`);
    LPRINT(`D${int(x + w)},${int(y)}`);
    LPRINT(`D${int(x + w)},${int(y + h)}`);
    LPRINT(`D${int(x)},${int(y + h)}`);
    LPRINT(`D${int(x)},${int(y)}`);
}
