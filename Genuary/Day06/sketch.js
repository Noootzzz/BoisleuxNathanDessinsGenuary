// GENUARY DAY 6: Lights on/off

let DESSIN = 106;
let NP = 480, PI = Math.PI;

let lightsOn = true;

function setup() {
    INIT();
    PALETTE("RED");
    frameRate(2); // Slow blink
}

function draw() {
    // Toggle lights
    lightsOn = !lightsOn;

    OUTPUT = "";

    if (lightsOn) {
        background_("#E4BAA8");
        stroke_("#8F080E");
    } else {
        background_("#000000");
        stroke_("#333333");
    }

    let cx = NP / 2;
    let cy = NP / 2;
    let w = 150;
    let h = 250;

    // Draw a Lamp bulb shape

    // Bulb
    let r = 80;
    for (let i = 0; i <= 36; i++) {
        let ang = map(i, 0, 36, 0, TWO_PI);
        let x = cx + r * cos(ang);
        let y = cy - 50 + r * sin(ang);

        // Bottom part is socket, so skip bottom angles
        if (ang > PI * 0.8 && ang < PI * 2.2) {
            // just draw socket later
        } else {
            if (i == 0) LPRINT(`M${int(x)},${int(y)}`);
            else LPRINT(`D${int(x)},${int(y)}`);
        }
    }

    // Socket
    LPRINT(`M${cx - 30},${cy + 10}`);
    LPRINT(`D${cx - 30},${cy + 60}`);
    LPRINT(`D${cx + 30},${cy + 60}`);
    LPRINT(`D${cx + 30},${cy + 10}`);

    // Filament (only if lights on)
    if (lightsOn) {
        LPRINT(`M${cx - 10},${cy - 20}`);
        LPRINT(`D${cx},${cy - 50}`);
        LPRINT(`D${cx + 10},${cy - 20}`);

        // Rays
        for (let i = 0; i < 8; i++) {
            let ang = map(i, 0, 8, 0, TWO_PI);
            let x1 = cx + (r + 20) * cos(ang);
            let y1 = cy - 50 + (r + 20) * sin(ang);
            let x2 = cx + (r + 50) * cos(ang);
            let y2 = cy - 50 + (r + 50) * sin(ang);
            LPRINT(`M${int(x1)},${int(y1)}`);
            LPRINT(`D${int(x2)},${int(y2)}`);
        }
    }

    TRACE();
}
