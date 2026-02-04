// GENUARY DAY 27: Lifeform
// A fictional lifeform (e.g., micro-organism or alien plant)

let DESSIN = 127;
let NP = 480, PI = Math.PI;

function setup() {
    INIT();
    PALETTE("RED");

    // A simple symmetric creature with tentacles

    let cx = NP / 2;
    let cy = NP / 2;

    // Body (Capsule)
    let w = 60;
    let h = 120;

    LPRINT(`M${cx - w / 2},${cy - h / 2}`);
    LPRINT(`D${cx + w / 2},${cy - h / 2}`);
    LPRINT(`D${cx + w / 2},${cy + h / 2}`);
    LPRINT(`D${cx - w / 2},${cy + h / 2}`);
    LPRINT(`D${cx - w / 2},${cy - h / 2}`);

    // Tentacles
    let numTentacles = 8;
    for (let i = 0; i < numTentacles; i++) {
        let y = map(i, 0, numTentacles - 1, cy - h / 2, cy + h / 2);
        let len = random(50, 100);

        // Left
        LPRINT(`M${cx - w / 2},${int(y)}`);
        // Wiggle line
        let segs = 10;
        for (let j = 1; j <= segs; j++) {
            let segmentX = (cx - w / 2) - (j / segs) * len;
            let segmentY = y + sin(j) * 10;
            LPRINT(`D${int(segmentX)},${int(segmentY)}`);
        }

        // Right
        LPRINT(`M${cx + w / 2},${int(y)}`);
        // Wiggle line
        for (let j = 1; j <= segs; j++) {
            let segmentX = (cx + w / 2) + (j / segs) * len;
            let segmentY = y + sin(j + PI) * 10;
            LPRINT(`D${int(segmentX)},${int(segmentY)}`);
        }
    }

    TRACE();
}
