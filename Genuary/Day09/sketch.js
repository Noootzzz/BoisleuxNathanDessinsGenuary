// GENUARY DAY 9: Crazy automaton

let DESSIN = 109;
let NP = 480, PI = Math.PI;

function setup() {
    INIT();
    PALETTE("NEW_YELLOW");

    // 1D Cyclic Automaton
    // Rule 30 inspired but with more states

    let cells = [];
    let numCells = 120; // Width / 4
    let generations = 120; // Height / 4

    // Init
    for (let i = 0; i < numCells; i++) {
        cells[i] = int(random(2)); // 0 or 1
    }

    let cellW = NP / numCells;
    let cellH = NP / generations;

    function drawRow(yIndex) {
        for (let i = 0; i < numCells; i++) {
            if (cells[i] == 1) {
                let x = i * cellW;
                let y = yIndex * cellH;
                // Draw Box
                LPRINT(`M${int(x)},${int(y)}`);
                LPRINT(`D${int(x + cellW)},${int(y)}`);
                LPRINT(`D${int(x + cellW)},${int(y + cellH)}`);
                LPRINT(`D${int(x)},${int(y + cellH)}`);
                LPRINT(`D${int(x)},${int(y)}`);
            }
        }
    }

    // Evolve
    for (let g = 0; g < generations; g++) {
        drawRow(g);

        let nextCells = [];
        for (let i = 0; i < numCells; i++) {
            let left = cells[(i - 1 + numCells) % numCells];
            let me = cells[i];
            let right = cells[(i + 1) % numCells];

            // Rule 30: left XOR (me OR right)
            // Let's make it "crazy": (left + me + right) % crazy_mod
            // Actually Rule 30 is good for chaos.
            // Rule 30: 000->0, 001->1, 010->1, 011->1, 100->1, 101->0, 110->0, 111->0

            let state = 0;
            if (left == 1 && me == 1 && right == 1) state = 0;
            else if (left == 1 && me == 1 && right == 0) state = 0;
            else if (left == 1 && me == 0 && right == 1) state = 0;
            else if (left == 1 && me == 0 && right == 0) state = 1;
            else if (left == 0 && me == 1 && right == 1) state = 1;
            else if (left == 0 && me == 1 && right == 0) state = 1;
            else if (left == 0 && me == 0 && right == 1) state = 1;
            else if (left == 0 && me == 0 && right == 0) state = 0;

            nextCells[i] = state;
        }
        cells = nextCells;
    }

    TRACE();
}
