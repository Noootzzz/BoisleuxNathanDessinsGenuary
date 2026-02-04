// GENUARY DAY 25: Organic Geometry
// Forms that look organic but are constructed entirely from geometric shapes.

let DESSIN = 125;
let NP = 480, PI = Math.PI;

function setup() {
    INIT();
    PALETTE("GREEN");

    // A tree structure made of triangles or circles

    let cx = NP / 2;
    let cy = NP - 50;

    // Recursive branch function
    function branch(x, y, len, angle, depth) {
        if (depth == 0) return;

        // Calculate new point
        let x2 = x + len * cos(angle);
        let y2 = y + len * sin(angle);

        // Draw geometric shape as the branch
        // A Triangle
        drawTriangle(x, y, x2, y2, 5 * depth);

        // Recurse
        let newLen = len * 0.7;
        branch(x2, y2, newLen, angle - PI / 6, depth - 1);
        branch(x2, y2, newLen, angle + PI / 6, depth - 1);
    }

    branch(cx, cy, 100, -PI / 2, 6);

    TRACE();
}

function drawTriangle(x1, y1, x2, y2, w) {
    // Draw an isosceles triangle pointing from 1 to 2
    // Base at 1, point at 2? Or thick line?
    // Let's do a thick line rect

    let ang = atan2(y2 - y1, x2 - x1);
    let perp = ang + PI / 2;

    let wx = w / 2 * cos(perp);
    let wy = w / 2 * sin(perp);

    let px1 = x1 + wx;
    let py1 = y1 + wy;
    let px2 = x1 - wx;
    let py2 = y1 - wy;

    // Just a triangle pointing to x2,y2
    LPRINT(`M${int(px1)},${int(py1)}`);
    LPRINT(`D${int(px2)},${int(py2)}`);
    LPRINT(`D${int(x2)},${int(y2)}`);
    LPRINT(`D${int(px1)},${int(py1)}`);
}
