// GENUARY DAY 20: One line
// An artwork that is made of a single line only.

let DESSIN = 120;
let NP = 480, PI = Math.PI;

function setup() {
    INIT();
    PALETTE("RED");

    // Single line spiral that wiggles

    let cx = NP / 2;
    let cy = NP / 2;
    let points = [];

    // Start in center
    LPRINT(`M${cx},${cy}`);

    let totalSteps = 2000;
    let maxRadius = 220;

    for (let i = 0; i < totalSteps; i++) {
        let t = i / totalSteps;
        let ang = t * 40 * PI; // Many rotations
        let rad = t * maxRadius;

        // Add wiggle
        let noiseVal = map(sin(ang * 10), -1, 1, -5, 5); // Simple sine wiggle instead of Perlin which isn't available

        let x = cx + (rad + noiseVal) * cos(ang);
        let y = cy + (rad + noiseVal) * sin(ang);

        LPRINT(`D${int(x)},${int(y)}`);
    }

    TRACE();
}
