// GENUARY DAY 5: Write "Genuary". Avoid using a font.

let DESSIN = 105;
let NP = 480, PI = Math.PI;

function setup() {
    INIT();
    PALETTE("NEW_BLUE");

    let w = 40;
    let h = 60;
    let gap = 15;
    let startX = 50;
    let startY = 200;

    // Define helper to draw lines relative to letter position
    function lineRel(x1, y1, x2, y2, ox, oy) {
        LPRINT(`M${ox + x1},${oy + y1}`);
        LPRINT(`D${ox + x2},${oy + y2}`);
    }

    // G
    let ox = startX;
    let oy = startY;
    lineRel(w, 0, 0, 0, ox, oy);
    lineRel(0, 0, 0, h, ox, oy);
    lineRel(0, h, w, h, ox, oy);
    lineRel(w, h, w, h / 2, ox, oy);
    lineRel(w, h / 2, w / 2, h / 2, ox, oy);

    // E
    ox += w + gap;
    lineRel(w, 0, 0, 0, ox, oy);
    lineRel(0, 0, 0, h, ox, oy);
    lineRel(0, h, w, h, ox, oy);
    lineRel(0, h / 2, w * 0.8, h / 2, ox, oy);

    // N
    ox += w + gap;
    lineRel(0, h, 0, 0, ox, oy);
    lineRel(0, 0, w, h, ox, oy);
    lineRel(w, h, w, 0, ox, oy);

    // U
    ox += w + gap;
    lineRel(0, 0, 0, h, ox, oy);
    lineRel(0, h, w, h, ox, oy);
    lineRel(w, h, w, 0, ox, oy);

    // A
    ox += w + gap;
    lineRel(0, h, w / 2, 0, ox, oy);
    lineRel(w / 2, 0, w, h, ox, oy);
    lineRel(w * 0.25, h / 2, w * 0.75, h / 2, ox, oy);

    // R
    ox += w + gap;
    lineRel(0, h, 0, 0, ox, oy);
    lineRel(0, 0, w, 0, ox, oy);
    lineRel(w, 0, w, h / 2, ox, oy);
    lineRel(w, h / 2, 0, h / 2, ox, oy);
    lineRel(0, h / 2, w, h, ox, oy);

    // Y
    ox += w + gap;
    lineRel(0, 0, w / 2, h / 2, ox, oy);
    lineRel(w, 0, w / 2, h / 2, ox, oy);
    lineRel(w / 2, h / 2, w / 2, h, ox, oy);

    TRACE();
}
