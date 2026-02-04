// GENUARY DAY 26: Recursive Grids
// A grid where cells split into smaller grids

let DESSIN = 126;
let NP = 480, PI = Math.PI;

function setup() {
    INIT();
    PALETTE("NEW_YELLOW");

    // Recursive grid function
    function drawGrid(x, y, w, h, depth) {
        if (depth == 0) {
            // Draw a rect or something in the cell
            LPRINT(`M${int(x)},${int(y)}`);
            LPRINT(`D${int(x + w)},${int(y)}`);
            LPRINT(`D${int(x + w)},${int(y + h)}`);
            LPRINT(`D${int(x)},${int(y + h)}`);
            LPRINT(`D${int(x)},${int(y)}`);
            return;
        }

        // Decide whether to split
        if (random() < 0.7) {
            // Split 2x2
            let halfW = w / 2;
            let halfH = h / 2;
            drawGrid(x, y, halfW, halfH, depth - 1);
            drawGrid(x + halfW, y, halfW, halfH, depth - 1);
            drawGrid(x, y + halfH, halfW, halfH, depth - 1);
            drawGrid(x + halfW, y + halfH, halfW, halfH, depth - 1);
        } else {
            // Stop here
            drawGrid(x, y, w, h, 0);
        }
    }

    drawGrid(20, 20, 440, 440, 4);

    TRACE();
}
