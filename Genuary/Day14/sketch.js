// GENUARY DAY 14: Everything fits perfectly
// Tesselation (Hexagons)

let DESSIN = 114;
let NP = 480, PI = Math.PI;

function setup() {
    INIT();
    PALETTE("GREEN");

    // Honeycomb pattern

    let r = 30;
    let h = r * Math.sqrt(3);
    let w = 2 * r;

    let cols = floor(NP / (w * 0.75)) + 1;
    let rows = floor(NP / h) + 1;

    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
            let cx = i * w * 0.75;
            let cy = j * h;
            if (i % 2 == 1) cy += h / 2;

            // Draw Hexagon
            for (let k = 0; k <= 6; k++) {
                let ang = map(k, 0, 6, 0, TWO_PI);
                let x = cx + r * cos(ang);
                let y = cy + r * sin(ang);

                if (k == 0) LPRINT(`M${int(x)},${int(y)}`);
                else LPRINT(`D${int(x)},${int(y)}`);
            }
        }
    }

    TRACE();
}
