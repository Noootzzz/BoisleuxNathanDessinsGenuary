// GENUARY DAY 7: Boolean algebra
// Visualizing AND, OR, XOR via shape intersections

let DESSIN = 107;
let NP = 480, PI = Math.PI;

function setup() {
    INIT();
    PALETTE("GREEN");

    // Two shapes: Vertical bars and Horizontal bars
    // AND = Intersection (Crosshatch)
    // OR = Union (Both combined)
    // XOR = Difference (Only one or other)

    // We'll simulate this by drawing patterns.

    // Top Left: OR (Union)
    drawPattern(50, 50, 150, 150, "OR");

    // Top Right: AND (Intersection)
    drawPattern(250, 50, 150, 150, "AND");

    // Bottom: XOR (Difference)
    drawPattern(150, 250, 150, 150, "XOR");

    TRACE();
}

function drawPattern(x, y, w, h, mode) {
    let r = w / 2;
    let cx = x + w / 2;
    let cy = y + h / 2;

    // Shape A: Circle
    let isA = (px, py) => dist(px, py, cx - r / 3, cy) < r / 1.5;
    // Shape B: Circle
    let isB = (px, py) => dist(px, py, cx + r / 3, cy) < r / 1.5;

    let step = 5;
    for (let j = y; j < y + h; j += step) {
        for (let i = x; i < x + w; i += step) {
            let a = isA(i, j);
            let b = isB(i, j);
            let draw = false;

            if (mode == "AND") draw = a && b;
            if (mode == "OR") draw = a || b;
            if (mode == "XOR") draw = (a && !b) || (!a && b);

            if (draw) {
                LPRINT(`M${i},${j}`);
                LPRINT(`D${i + 2},${j}`);
                LPRINT(`D${i + 2},${j + 2}`);
                LPRINT(`D${i},${j + 2}`);
                LPRINT(`D${i},${j}`);
            }
        }
    }
}
