// GENUARY DAY 24: Perfectionist's nightmare
// A grid that is almost perfect but slightly off

let DESSIN = 124;
let NP = 480, PI = Math.PI;

function setup() {
    INIT();
    PALETTE("NEW_BLUE");

    let cols = 10;
    let rows = 10;
    let s = NP / cols;

    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
            let x = i * s;
            let y = j * s;

            let rot = 0;

            // Randomly one cell is VERY rotated
            if (random() < 0.05) {
                rot = random(-PI / 8, PI / 8);
            }
            // Others are slightly jittered
            else {
                rot = random(-0.02, 0.02);
            }

            let cx = x + s / 2;
            let cy = y + s / 2;

            // Slightly offset center too
            cx += random(-2, 2);
            cy += random(-2, 2);

            drawRect(cx, cy, s * 0.9, s * 0.9, rot);
        }
    }

    TRACE();
}

function drawRect(cx, cy, w, h, rot) {
    let x1 = -w / 2; let y1 = -h / 2;
    let x2 = w / 2; let y2 = -h / 2;
    let x3 = w / 2; let y3 = h / 2;
    let x4 = -w / 2; let y4 = h / 2;

    let pts = [{ x: x1, y: y1 }, { x: x2, y: y2 }, { x: x3, y: y3 }, { x: x4, y: y4 }];

    for (let i = 0; i < 4; i++) {
        let px = pts[i].x;
        let py = pts[i].y;
        pts[i].x = cx + px * cos(rot) - py * sin(rot);
        pts[i].y = cy + px * sin(rot) + py * cos(rot);
    }

    LPRINT(`M${int(pts[0].x)},${int(pts[0].y)}`);
    LPRINT(`D${int(pts[1].x)},${int(pts[1].y)}`);
    LPRINT(`D${int(pts[2].x)},${int(pts[2].y)}`);
    LPRINT(`D${int(pts[3].x)},${int(pts[3].y)}`);
    LPRINT(`D${int(pts[0].x)},${int(pts[0].y)}`);
}
