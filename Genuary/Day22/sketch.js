// GENUARY DAY 22: Pen plotter ready
// Topographic-like lines (Flow field or Noise contours)

let DESSIN = 122;
let NP = 480, PI = Math.PI;

function setup() {
    INIT();
    PALETTE("NEW_BLUE");

    // Since we don't have noise() in setup without p5 actively creating it sometimes (it works in setup usually),
    // but we can simulate noise or use a simple function.
    // We'll create horizontal lines that are displaced by a sine wave combination

    let numLines = 50;
    let gap = NP / numLines;

    for (let j = 0; j < numLines; j++) {
        let y = j * gap;

        // Draw line as series of segments
        let segs = 100;

        LPRINT(`M${0},${int(y)}`);

        for (let i = 0; i <= segs; i++) {
            let x = map(i, 0, segs, 0, NP);

            // Calculate displacement
            // y_offset = sin(x*freq + phase) * amp
            let y_off = sin(x * 0.05 + y * 0.02) * 20;
            y_off += sin(x * 0.1) * 10;

            // Add some "mountains" in the middle
            let dToCenter = dist(x, y, NP / 2, NP / 2);
            if (dToCenter < 100) {
                y_off -= (100 - dToCenter) * 0.5;
            }

            LPRINT(`D${int(x)},${int(y + y_off)}`);
        }
    }

    TRACE();
}
