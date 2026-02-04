// GENUARY DAY 17: Wallpaper group
// Group p4m: 4-fold rotation, reflections in horizontal, vertical, and diagonal lines.

let DESSIN = 117;
let NP = 480, PI = Math.PI;

function setup() {
    INIT();
    PALETTE("RED");

    let cellSize = 60;
    let rows = NP / cellSize;
    let cols = NP / cellSize;

    // Define a fundamental region pattern
    function drawFundamental(ox, oy, s) {
        // A simple curve or shape
        LPRINT(`M${ox},${oy}`);
        LPRINT(`D${ox + s / 2},${oy + s / 4}`);
        LPRINT(`D${ox + s},${oy}`);

        LPRINT(`M${ox},${oy}`);
        LPRINT(`D${ox + s / 4},${oy + s / 2}`);
        LPRINT(`D${ox},${oy + s}`);
    }

    // Apply symmetries to fill the cell
    function drawCell(ox, oy, s) {
        // 4 rotations of the fundamental + reflections
        // Actually simply, p4m is square symmetry.
        // Draw 4 squares rotated 90 degrees around center

        let cx = ox + s / 2;
        let cy = oy + s / 2;

        // Draw a "flower" type pattern that has p4m symmetry

        // Center diamond
        LPRINT(`M${cx - s / 4},${cy}`);
        LPRINT(`D${cx},${cy - s / 4}`);
        LPRINT(`D${cx + s / 4},${cy}`);
        LPRINT(`D${cx},${cy + s / 4}`);
        LPRINT(`D${cx - s / 4},${cy}`);

        // Corners
        LPRINT(`M${ox},${oy}`);
        LPRINT(`D${ox + s / 4},${oy + s / 4}`);

        LPRINT(`M${ox + s},${oy}`);
        LPRINT(`D${ox + s - s / 4},${oy + s / 4}`);

        LPRINT(`M${ox + s},${oy + s}`);
        LPRINT(`D${ox + s - s / 4},${oy + s - s / 4}`);

        LPRINT(`M${ox},${oy + s}`);
        LPRINT(`D${ox + s / 4},${oy + s - s / 4}`);
    }

    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
            drawCell(i * cellSize, j * cellSize, cellSize);
        }
    }

    TRACE();
}
