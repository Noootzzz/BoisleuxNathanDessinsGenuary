// GENUARY DAY 2: Twelve principles of animation
// Principle: Squash and Stretch

let DESSIN = 102;
let NP = 480, PI = Math.PI;

let y = 0;
let vel = 0;
let gravity = 0.5;
let radius = 40;
let ground = NP - 50;

function setup() {
    INIT();
    PALETTE("RED");
    frameRate(30);
}

function draw() {
    // Clear trace buffer
    OUTPUT = "";

    // Custom clear background because INIT only runs once
    background_(BG_COLOR);

    // Physics
    vel += gravity;
    y += vel;

    let stretch = 1;
    let squash = 1;

    if (y > ground - radius) {
        y = ground - radius;
        vel *= -0.8; // bounce

        // Squash effect
        if (abs(vel) > 1) {
            squash = map(abs(vel), 0, 15, 1, 1.4);
            stretch = 1 / squash;
        }
    } else {
        // Stretch effect while falling/rising
        stretch = map(abs(vel), 0, 15, 1, 1.2);
        squash = 1 / stretch;
    }

    // Draw Circle (Ellipsoid for squash/stretch)
    let cx = NP / 2;
    let cy = y;

    let rw = radius * squash;
    let rh = radius * stretch;

    // Approximate ellipse with lines (since we only have LPRINT line commands)
    let res = 20;
    for (let i = 0; i <= res; i++) {
        let ang = map(i, 0, res, 0, TWO_PI);
        let px = cx + rw * cos(ang);
        let py = cy + rh * sin(ang);

        if (i == 0) LPRINT(`M${int(px)},${int(py)}`);
        else LPRINT(`D${int(px)},${int(py)}`);
    }

    TRACE();
}
