// GENUARY DAY 19: 16x16

let DESSIN = 119;
let NP = 480, PI = Math.PI;

function setup() {
    INIT();
    PALETTE("NEW_BLUE");

    // 16x16 Grid
    let cols = 16;
    let rows = 16;
    let cellW = NP / cols;

    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
            let x = i * cellW;
            let y = j * cellW;

            // Draw something in each cell
            LPRINT(`M${int(x)},${int(y)}`);
            LPRINT(`D${int(x + cellW)},${int(y)}`);
            LPRINT(`D${int(x + cellW)},${int(y + cellW)}`);
            LPRINT(`D${int(x)},${int(y + cellW)}`);
            LPRINT(`D${int(x)},${int(y)}`);

            // Add minimal detail
            if ((i + j) % 2 == 0) {
                LPRINT(`M${int(x)},${int(y)}`);
                LPRINT(`D${int(x + cellW)},${int(y + cellW)}`);
            } else {
                LPRINT(`M${int(x + cellW)},${int(y)}`);
                LPRINT(`D${int(x)},${int(y + cellW)}`);
            }
        }
    }

    TRACE();
}
