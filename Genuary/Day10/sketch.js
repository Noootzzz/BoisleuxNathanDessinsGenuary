// GENUARY DAY 10: Polar coordinates

let DESSIN = 110;
let NP = 480, PI = Math.PI;

function setup() {
    INIT();
    PALETTE("RED");

    let cx = NP / 2;
    let cy = NP / 2;

    // Maurer Rose
    let n = 6;
    let d = 71;
    let r = 200;

    let points = [];

    LPRINT(`M${cx},${cy}`); // Start center

    // The Maurer Rose connects points on a rose curve
    // Rose curve: r = sin(n * theta)
    // We step through theta = 0, d, 2d, 3d...

    for (let i = 0; i <= 360; i++) {
        let k = i * d;
        let rad = k * (PI / 180); // convert deg to rad
        let radius = r * sin(n * rad);

        let x = cx + radius * cos(rad);
        let y = cy + radius * sin(rad);

        if (i == 0) LPRINT(`M${int(x)},${int(y)}`);
        else LPRINT(`D${int(x)},${int(y)}`);
    }

    // Also draw the Rose itself for comparison? No, just Maurer is cooler.

    TRACE();
}
