// GENUARY DAY 18: Unexpected path
// Draw a route that changes direction based on one very simple rule.

let DESSIN = 118;
let NP = 480, PI = Math.PI;

function setup() {
    INIT();
    PALETTE("NEW_YELLOW");

    let x = NP / 2;
    let y = NP / 2;
    let dir = 0; // 0=right, 1=down, 2=left, 3=up

    // Rule: If current position (coord sum) is divisible by prime, turn left, else right
    // Or simple Collatz-like path:

    LPRINT(`M${x},${y}`);

    let step = 5;

    for (let i = 0; i < 1000; i++) {
        let val = int(x / step) + int(y / step);

        if (val % 3 == 0) {
            dir = (dir + 1) % 4; // Turn Right
        } else {
            dir = (dir + 3) % 4; // Turn Left (or -1)
        }

        if (dir == 0) x += step;
        if (dir == 1) y += step;
        if (dir == 2) x -= step;
        if (dir == 3) y -= step;

        // Bounce off walls
        if (x < 50 || x > NP - 50 || y < 50 || y > NP - 50) {
            dir = (dir + 2) % 4; // U-turn
            // Step back in new dir
            if (dir == 0) x += step;
            if (dir == 1) y += step;
            if (dir == 2) x -= step;
            if (dir == 3) y -= step;
        }

        LPRINT(`D${int(x)},${int(y)}`);
    }

    TRACE();
}
