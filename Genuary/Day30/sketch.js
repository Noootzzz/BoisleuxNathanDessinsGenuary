// GENUARY DAY 30: Its not a bug, its a feature
// Glitch art or broken geometry

let DESSIN = 130;
let NP = 480, PI = Math.PI;

function setup() {
    INIT();
    PALETTE("NEW_BLUE");

    let cx = NP / 2;
    let cy = NP / 2;

    // Draw a standard grid but "corrupt" some lines

    let step = 20;
    for (let y = 0; y <= NP; y += step) {
        let xStart = 0;
        let xEnd = NP;

        if (random() < 0.1) {
            // Glitch shift
            xStart += random(-50, 50);
            LPRINT(`M${int(xStart)},${int(y)}`);
            if (random() < 0.5) {
                // Interrupt line
                let gap = random(50);
                LPRINT(`D${int(xEnd / 2 - gap)},${int(y)}`);
                LPRINT(`M${int(xEnd / 2 + gap)},${int(y)}`);
                LPRINT(`D${int(xEnd)},${int(y)}`);
            } else {
                LPRINT(`D${int(xEnd)},${int(y)}`);
            }
        } else {
            LPRINT(`M${int(xStart)},${int(y)}`);
            LPRINT(`D${int(xEnd)},${int(y)}`);
        }
    }

    // Vertical glitches
    for (let x = 0; x <= NP; x += step) {
        if (random() < 0.2) {
            // Jagged line
            LPRINT(`M${int(x)},${0}`);
            for (let y = 0; y <= NP; y += 20) {
                let xOff = random(-5, 5);
                LPRINT(`D${int(x + xOff)},${int(y)}`);
            }
        }
    }

    TRACE();
}
