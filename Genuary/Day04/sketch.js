// GENUARY DAY 4: Lowres

let DESSIN = 104;
let NP = 480, PI = Math.PI;

function setup() {
    INIT();
    PALETTE("YELLOW");

    let cx = NP / 2;
    let cy = NP / 2;
    let r = 150;

    // Resolution Factor (Pixel size)
    let px = 20;

    // Draw a circle but snap everything to grid

    // Since we draw lines, we can simulate low res by drawing "stairs"
    // Scan grid
    for (let y = 0; y < NP; y += px) {
        for (let x = 0; x < NP; x += px) {
            let dx = x - cx;
            let dy = y - cy;
            if (sqrt(dx * dx + dy * dy) < r) {
                // Draw pixel (a square)
                LPRINT(`M${x},${y}`);
                LPRINT(`D${x + px},${y}`);
                LPRINT(`D${x + px},${y + px}`);
                LPRINT(`D${x},${y + px}`);
                LPRINT(`D${x},${y}`);
            }
        }
    }

    TRACE();
}
