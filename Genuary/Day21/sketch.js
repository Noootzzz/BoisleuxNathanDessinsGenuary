// GENUARY DAY 21: Bauhaus Poster
// Simple geometric shapes, strong composition

let DESSIN = 121;
let NP = 480, PI = Math.PI;

function setup() {
    INIT();
    PALETTE("RED"); // Use Red/Black theme often seen in Bauhaus

    // Composition:
    // Large circle, diagonal lines, rectangle

    let cx = NP / 2;
    let cy = NP / 2;

    // Large Circle
    drawCircle(cx, cy, 180);

    // Rectangle intersecting
    drawRect(50, 200, 380, 50);

    // Diagonal lines
    let spacing = 20;
    for (let i = -200; i < 400; i += spacing) {
        if (i > 0 && i < 150) continue; // Gap
        let x1 = 0;
        let y1 = i;
        let x2 = i;
        let y2 = 0;
        // Clamp to screen?? No, let's just draw constrained lines
        // Actually let's draw a triangle of lines

        LPRINT(`M${0},${i}`);
        LPRINT(`D${i},${0}`);
    }

    // Small circle
    drawCircle(350, 100, 40);

    TRACE();
}

function drawCircle(cx, cy, r) {
    let res = 60;
    for (let i = 0; i <= res; i++) {
        let ang = map(i, 0, res, 0, TWO_PI);
        let x = cx + r * cos(ang);
        let y = cy + r * sin(ang);
        if (i == 0) LPRINT(`M${int(x)},${int(y)}`);
        else LPRINT(`D${int(x)},${int(y)}`);
    }
}

function drawRect(x, y, w, h) {
    LPRINT(`M${int(x)},${int(y)}`);
    LPRINT(`D${int(x + w)},${int(y)}`);
    LPRINT(`D${int(x + w)},${int(y + h)}`);
    LPRINT(`D${int(x)},${int(y + h)}`);
    LPRINT(`D${int(x)},${int(y)}`);
}
