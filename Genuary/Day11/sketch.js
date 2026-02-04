// GENUARY DAY 11: Quine
// "A Quine is a computer program that outputs exactly its own source code."

let DESSIN = 111;
let NP = 480, PI = Math.PI;

function setup() {
    INIT();
    PALETTE("NEW_BLUE");

    // We will simply draw the text "This is a Quine-ish Sketch" in a very abstract encoded way
    // representing the "data" of the drawing.
    // Or, since we can't easily print text without a font engine,
    // we will draw a QR-like pattern which hypothetically encodes the sketch

    let code = "function setup(){INIT();PALETTE('NEW_BLUE');drawQuine();TRACE();}";

    let cx = NP / 2;
    let cy = NP / 2;
    let cellSize = 10;

    let cursorX = 20;
    let cursorY = 20;

    for (let i = 0; i < code.length; i++) {
        let charCode = code.charCodeAt(i);
        // Binary representation
        for (let b = 0; b < 8; b++) {
            let bit = (charCode >> b) & 1;
            if (bit == 1) {
                LPRINT(`M${cursorX},${cursorY}`);
                LPRINT(`D${cursorX + cellSize},${cursorY}`);
                LPRINT(`D${cursorX + cellSize},${cursorY + cellSize}`);
                LPRINT(`D${cursorX},${cursorY + cellSize}`);
                LPRINT(`D${cursorX},${cursorY}`);
            }
            cursorX += cellSize;
            if (cursorX > NP - 20) {
                cursorX = 20;
                cursorY += cellSize;
            }
        }
    }

    TRACE();
}
