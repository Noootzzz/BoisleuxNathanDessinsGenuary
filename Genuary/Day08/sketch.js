// GENUARY DAY 8: A City

let DESSIN = 108;
let NP = 480, PI = Math.PI;

function setup() {
    INIT();
    PALETTE("YELLOW");

    // Generative Metropolis
    // Draw random skyscrapers

    let numBuildings = 30;
    let ground = 400;

    for (let i = 0; i < numBuildings; i++) {
        let x = random(10, NP - 50);
        let w = random(20, 60);
        let h = random(50, 250);
        let y = ground - h;

        // Draw building outline
        LPRINT(`M${int(x)},${int(ground)}`);
        LPRINT(`D${int(x)},${int(y)}`);
        LPRINT(`D${int(x + w)},${int(y)}`);
        LPRINT(`D${int(x + w)},${int(ground)}`);

        // Windows
        let rows = int(h / 10);
        let cols = int(w / 8);
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (random() > 0.3) {
                    let wx = x + 3 + c * 8;
                    let wy = y + 3 + r * 10;
                    LPRINT(`M${int(wx)},${int(wy)}`);
                    LPRINT(`D${int(wx + 4)},${int(wy)}`);
                    LPRINT(`D${int(wx + 4)},${int(wy + 6)}`);
                    LPRINT(`D${int(wx)},${int(wy + 6)}`);
                    LPRINT(`D${int(wx)},${int(wy)}`);
                }
            }
        }
    }

    TRACE();
}
