// GENUARY DAY 13: Self portrait

let DESSIN = 113;
let NP = 480, PI = Math.PI;

function setup() {
    INIT();
    PALETTE("RED");

    let cx = NP / 2;
    let cy = NP / 2;

    // Basic geometric face
    // Head
    drawCircle(cx, cy, 150);

    // Eyes
    drawCircle(cx - 50, cy - 30, 20);
    drawCircle(cx + 50, cy - 30, 20);

    // Nose (Linear)
    LPRINT(`M${cx},${cy}`);
    LPRINT(`D${cx - 10},${cy + 40}`);
    LPRINT(`D${cx + 10},${cy + 40}`);

    // Mouth
    LPRINT(`M${cx - 50},${cy + 80}`);
    LPRINT(`D${cx},${cy + 90}`);
    LPRINT(`D${cx + 50},${cy + 80}`);

    // Hair (Random lines on top)
    for (let i = 0; i < 50; i++) {
        let ang = random(PI, TWO_PI);
        let r = 150 - random(10);
        let x = cx + r * cos(ang);
        let y = cy + r * sin(ang);
        let l = random(20, 50);
        // Sticky up hair
        let x2 = x + random(-20, 20);
        let y2 = y - l;
        LPRINT(`M${int(x)},${int(y)}`);
        LPRINT(`D${int(x2)},${int(y2)}`);
    }

    TRACE();
}

function drawCircle(cx, cy, r) {
    let res = 40;
    for (let i = 0; i <= res; i++) {
        let ang = map(i, 0, res, 0, TWO_PI);
        let x = cx + r * cos(ang);
        let y = cy + r * sin(ang);
        if (i == 0) LPRINT(`M${int(x)},${int(y)}`);
        else LPRINT(`D${int(x)},${int(y)}`);
    }
}
