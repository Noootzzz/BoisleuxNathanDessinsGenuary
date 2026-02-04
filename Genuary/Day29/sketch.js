// GENUARY DAY 29: Genetic evolution and mutation
// Generations of shapes

let DESSIN = 129;
let NP = 480, PI = Math.PI;

function setup() {
    INIT();
    PALETTE("NEW_YELLOW");

    // Draw rows of shapes where each row "mutates" from the previous one

    let rows = 8;
    let cols = 8;
    let cellW = NP / cols;
    let cellH = NP / rows;

    // Initial genes (shape properties)
    let gene = {
        sides: 4,
        size: 20,
        rotation: 0
    };

    for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
            let cx = i * cellW + cellW / 2;
            let cy = j * cellH + cellH / 2;

            // Draw phenotype
            drawPolygon(cx, cy, gene.size, gene.sides, gene.rotation);

            // Mutate for next individual
            if (random() < 0.3) {
                gene.size += random(-2, 2);
                gene.rotation += random(-0.2, 0.2);
            }
            if (random() < 0.05) {
                gene.sides = max(3, gene.sides + (random() < 0.5 ? -1 : 1));
            }
        }
    }

    TRACE();
}

function drawPolygon(cx, cy, r, sides, rot) {
    for (let i = 0; i <= sides; i++) {
        let ang = map(i, 0, sides, 0, TWO_PI) + rot;
        let x = cx + r * cos(ang);
        let y = cy + r * sin(ang);

        if (i == 0) LPRINT(`M${int(x)},${int(y)}`);
        else LPRINT(`D${int(x)},${int(y)}`);
    }
}
