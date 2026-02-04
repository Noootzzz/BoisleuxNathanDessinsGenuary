// GENUARY DAY 16: Order and disorder

let DESSIN = 116;
let NP = 480, PI = Math.PI;

function setup() {
    INIT();
    PALETTE("NEW_YELLOW");

    // Grid of Squares
    // Top rows are orderly
    // As we go down, they become rotated and shifted (disorderly)

    let cols = 15;
    let rows = 15;
    let size = NP / cols;

    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
            let cx = i * size + size / 2;
            let cy = j * size + size / 2;

            let disorderFactor = map(j, 0, rows, 0, 1.5); // Increase disorder with y
            if (disorderFactor < 0.2) disorderFactor = 0; // Pure order at top

            // Random rotation and shift
            let rot = random(-PI / 4, PI / 4) * disorderFactor;
            let shiftX = random(-size / 2, size / 2) * disorderFactor;
            let shiftY = random(-size / 2, size / 2) * disorderFactor;

            drawSquare(cx + shiftX, cy + shiftY, size * 0.8, rot);
        }
    }

    TRACE();
}

function drawSquare(cx, cy, s, rot) {
    // Vertices
    let pts = [
        { x: -s / 2, y: -s / 2 },
        { x: s / 2, y: -s / 2 },
        { x: s / 2, y: s / 2 },
        { x: -s / 2, y: s / 2 }
    ];

    // Rotate and Translate
    for (let i = 0; i < 4; i++) {
        let px = pts[i].x;
        let py = pts[i].y;

        let nx = px * cos(rot) - py * sin(rot);
        let ny = px * sin(rot) + py * cos(rot);

        pts[i].x = cx + nx;
        pts[i].y = cy + ny;
    }

    LPRINT(`M${int(pts[0].x)},${int(pts[0].y)}`);
    LPRINT(`D${int(pts[1].x)},${int(pts[1].y)}`);
    LPRINT(`D${int(pts[2].x)},${int(pts[2].y)}`);
    LPRINT(`D${int(pts[3].x)},${int(pts[3].y)}`);
    LPRINT(`D${int(pts[0].x)},${int(pts[0].y)}`);
}
