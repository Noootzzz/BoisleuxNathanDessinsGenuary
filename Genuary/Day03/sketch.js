// GENUARY DAY 3: Fibonacci forever

let DESSIN = 103;
let NP = 480, PI = Math.PI;

function setup() {
    INIT();
    PALETTE("GREEN");

    let cx = NP / 2;
    let cy = NP / 2;

    // Fibonacci Spiral
    // x = r * cos(theta), y = r * sin(theta)
    // r = c * sqrt(n)
    // theta = n * 137.508 degrees (golden angle)

    let numPoints = 500;
    let c = 8;
    let goldenAngle = 137.5077 * (PI / 180);

    for (let n = 0; n < numPoints; n++) {
        let r = c * sqrt(n);
        let theta = n * goldenAngle;

        let x = cx + r * cos(theta);
        let y = cy + r * sin(theta);

        // Draw a small square or circle at (x,y)
        // Using LPRINT to draw small squares
        let size = 3 + n / 100;

        LPRINT(`M${int(x - size)},${int(y - size)}`);
        LPRINT(`D${int(x + size)},${int(y - size)}`);
        LPRINT(`D${int(x + size)},${int(y + size)}`);
        LPRINT(`D${int(x - size)},${int(y + size)}`);
        LPRINT(`D${int(x - size)},${int(y - size)}`);
    }

    TRACE();
}
