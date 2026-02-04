// GENUARY DAY 1: One color, one shape

// ----------------------------------------------------
let DESSIN = 101; // Custom ID for this sketch

// ----------------------------------------------------
let NP=480, PI = Math.PI;

// ----------------------------------------------------
function setup() 
{
  INIT(); // Initialize using the custom library
  PALETTE("NEW_YELLOW"); // Use one of the palettes from init_trace.js
  
  // One Shape: A large, single irregular polygon resembling a "blob" or abstract shape
  // One Color: Defined by the strokes (BG is one color, Shape is another)
  
  let cx = NP/2;
  let cy = NP/2;
  let r = NP * 0.35;
  let numPoints = 12; // Fewer points = simpler shape
  
  // Create a single closed shape
  // We will generate the drawing commands string manually as per the library's expectation
  // 'M' = Move, 'D' = Draw (Line to)
  
  let points = [];
  for(let i=0; i<numPoints; i++){
    let ang = map(i, 0, numPoints, 0, TWO_PI);
    let rad = r + random(-20, 20); // Add some variation to be "organic" or just shape-y
    let x = cx + rad * cos(ang);
    let y = cy + rad * sin(ang);
    points.push({x: int(x), y: int(y)});
  }
  
  // Write to LPRINT
  for(let i=0; i<points.length; i++){
    let p = points[i];
    if(i===0) LPRINT(`M${p.x},${p.y}`);
    else LPRINT(`D${p.x},${p.y}`);
  }
  // Close the shape
  let first = points[0];
  LPRINT(`D${first.x},${first.y}`);
  
  TRACE();
}
