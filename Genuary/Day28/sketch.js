// GENUARY DAY 28: No libraries, no canvas, only HTML elements
// Since we are doing a plotter sketch, we will interpret this as drawing an HTML Layout!

let DESSIN = 128;
let NP = 480, PI = Math.PI;

function setup() {
    INIT();
    PALETTE("RED");

    // Draw a typical website layout structure (wireframe)
    // Header, Nav, Hero, Sidebars, Footer

    let margin = 20;
    let pWidth = NP - 2 * margin;
    let cursorY = margin;

    // Header
    drawBox(margin, cursorY, pWidth, 50);
    cursorY += 60;

    // Hero Section
    drawBox(margin, cursorY, pWidth, 150);
    // Image placeholder in Hero
    drawX(margin + 20, cursorY + 20, pWidth - 40, 110);
    cursorY += 160;

    // Body Columns
    let colGap = 10;
    let colWidth = (pWidth - 2 * colGap) / 3;

    drawBox(margin, cursorY, colWidth, 100);
    drawLines(margin + 5, cursorY + 5, colWidth - 10, 90, 10);

    drawBox(margin + colWidth + colGap, cursorY, colWidth, 100);
    drawLines(margin + colWidth + colGap + 5, cursorY + 5, colWidth - 10, 90, 10);

    drawBox(margin + 2 * colWidth + 2 * colGap, cursorY, colWidth, 100);
    drawLines(margin + 2 * colWidth + 2 * colGap + 5, cursorY + 5, colWidth - 10, 90, 10);

    cursorY += 110;

    // Footer
    drawBox(margin, cursorY, pWidth, 40);

    TRACE();
}

function drawBox(x, y, w, h) {
    LPRINT(`M${int(x)},${int(y)}`);
    LPRINT(`D${int(x + w)},${int(y)}`);
    LPRINT(`D${int(x + w)},${int(y + h)}`);
    LPRINT(`D${int(x)},${int(y + h)}`);
    LPRINT(`D${int(x)},${int(y)}`);
}

function drawX(x, y, w, h) {
    LPRINT(`M${int(x)},${int(y)}`);
    LPRINT(`D${int(x + w)},${int(y + h)}`);
    LPRINT(`M${int(x + w)},${int(y)}`);
    LPRINT(`D${int(x)},${int(y + h)}`);
}

function drawLines(x, y, w, h, gap) {
    for (let i = 0; i < h; i += gap) {
        if (i > h) break;
        LPRINT(`M${int(x)},${int(y + i)}`);
        LPRINT(`D${int(x + w)},${int(y + i)}`);
    }
}
