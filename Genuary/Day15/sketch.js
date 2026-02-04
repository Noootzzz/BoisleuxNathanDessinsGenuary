// GENUARY DAY 15: Invisible object
// Create an invisible object where only the shadows can be seen.

let DESSIN = 115;
let NP = 480, PI = Math.PI;

function setup() {
    INIT();
    PALETTE("RED");

    // Invisible Sphere casting a shadow
    // We draw the shadow (ground) but not the sphere

    let cx = NP / 2;
    let cy = NP / 2 + 50;

    // Shadow on ground
    // Ellipse

    let rw = 120;
    let rh = 40;

    for (let i = 0; i <= 40; i++) {
        let ang = map(i, 0, 40, 0, TWO_PI);
        let x = cx + rw * cos(ang);
        let y = cy + rh * sin(ang);

        if (i == 0) LPRINT(`M${int(x)},${int(y)}`);
        else LPRINT(`D${int(x)},${int(y)}`);
    }

    // Maybe hatch the shadow to make it visible
    let step = 10;
    for (let x = cx - rw; x <= cx + rw; x += step) {
        if (x < cx - rw || x > cx + rw) continue;
        // Find y intersection
        // (x-h)^2/a^2 + (y-k)^2/b^2 = 1
        // (y-k)^2 = b^2 * (1 - (x-h)^2/a^2)
        let dx = x - cx;
        let val = 1 - (dx * dx) / (rw * rw);
        if (val > 0) {
            let dy = rh * sqrt(val);
            LPRINT(`M${int(x)},${int(cy - dy)}`);
            LPRINT(`D${int(x)},${int(cy + dy)}`);
        }
    }

    TRACE();
}
