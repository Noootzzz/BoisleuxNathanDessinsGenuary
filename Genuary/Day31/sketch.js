// GENUARY DAY 31: GLSL day
// Since we are using SVG/Plotter, we will simulate a gradient/noise pattern
// commonly seen in GLSL shaders using heavy line density.

let DESSIN = 131;
let NP = 480, PI = Math.PI;

function setup() {
    INIT();
    PALETTE("NEW_YELLOW");

    // Create an interference pattern or flow

    // Draw many curves that shift phase
    let numLines = 80;

    for (let j = 0; j < numLines; j++) {
        let y = map(j, 0, numLines, 0, NP);

        LPRINT(`M${0},${int(y)}`);

        for (let x = 0; x <= NP; x += 5) {
            // Shader-like function: sin(x*y) type cool stuff
            // f(x, y) = sin(x*freq + time) * cos(y*freq)

            let freq = 0.05;
            let v = sin(x * freq + y * 0.02) * cos(y * freq * 0.5 + x * 0.01) * 30;

            LPRINT(`D${int(x)},${int(y + v)}`);
        }
    }

    TRACE();
}
