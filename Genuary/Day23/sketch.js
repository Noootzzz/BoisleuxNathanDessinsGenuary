// GENUARY DAY 23: Transparency
// Explore transparency (Simulated via wireframe / crosshatch)

let DESSIN = 123;
let NP = 480, PI = Math.PI;

function setup() {
    INIT();
    PALETTE("YELLOW");

    // Three overlapping circles
    // We will hatch them with different angles.
    // Where they overlap, the hatches will form a cross-hatch pattern (Transparency)

    let cx = NP / 2;
    let cy = NP / 2;
    let r = 100;

    drawHatchCircle(cx - 50, cy - 30, r, PI / 4);
    drawHatchCircle(cx + 50, cy - 30, r, -PI / 4);
    drawHatchCircle(cx, cy + 60, r, 0); // Horizontal

    TRACE();
}

function drawHatchCircle(cx, cy, r, angle) {
    // Bounding box scan
    let step = 5;

    // Rotate grid scan alignment
    // x' = x cos - y sin
    // y' = x sin + y cos

    // Instead of scanning rotated pixels, let's scan rotated lines

    // Draw lines parallel to angle
    // y = m*x + c
    // Scan normal distance

    // Simplified: Rotate point into local space, check dist, draw line in screen space

    let d = r * 2;
    for (let i = -r; i <= r; i += step) {
        // Line equation in local coordinates: x_local = i
        // We need to find the chord length at this x_local

        // x^2 + y^2 = r^2 -> y = +/- sqrt(r^2 - x^2)
        let h = sqrt(r * r - i * i);

        // Local segment: (i, -h) to (i, h)

        // Transform back to world
        let x1 = i * cos(angle) - (-h) * sin(angle) + cx;
        let y1 = i * sin(angle) + (-h) * cos(angle) + cy;

        let x2 = i * cos(angle) - (h) * sin(angle) + cx;
        let y2 = i * sin(angle) + (h) * cos(angle) + cy;

        LPRINT(`M${int(x1)},${int(y1)}`);
        LPRINT(`D${int(x2)},${int(y2)}`);
    }
}
