// ============================================================
// Week 1 Amy Liu: Images and Shapes (Jenga Poster)
// ============================================================

// ============================================================
// Week 1 Amy Liu: Interactive Jenga Exercise
// ============================================================

let img;
let hasFallen = false; // Track the state of the tower

function preload() {
  // Verbatim reference to the required file from the prompt
  img = loadImage("assets/images/jenga.jpg");
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(255); 

  // --- 1. THE IMAGE ---
  imageMode(CENTER);
  image(img, width / 2, 150, 200, 200);

  // --- 2. THE SHAPES (Conditional logic based on click) ---
  rectMode(CENTER);
  stroke(80, 50, 20);
  strokeWeight(3);
  
  if (!hasFallen) {
    // Standing Tower
    fill(180, 140, 100);
    rect(width / 2, 450, 180, 40); // Layer 1
    fill(200, 160, 120);
    rect(width / 2 + 10, 410, 180, 40); // Layer 2
    fill(222, 184, 135);
    rect(width / 2 - 5, 370, 180, 40); // Layer 3
  } else {
    // Fallen Blocks (Changed positions and rotations)
    push();
    translate(width / 2 - 100, 550);
    rotate(PI / 10);
    fill(180, 140, 100);
    rect(0, 0, 180, 40);
    pop();

    push();
    translate(width / 2 + 80, 560);
    rotate(-PI / 8);
    fill(200, 160, 120);
    rect(0, 0, 180, 40);
    pop();
  }

  // --- 3. THE TEXT (Changes based on click) ---
  textAlign(CENTER);
  noStroke();
  
  fill(60, 40, 20);
  textSize(42);
  textStyle(BOLD);
  text("JENGA", width / 2, 310);
  
  fill(hasFallen ? "red" : 16); // Change color if fallen
  textSize(24);
  textStyle(NORMAL);
  let message = hasFallen ? "OH NO! IT FELL!" : "Don't let it fall!";
  text(message, width / 2, 510);
  
  textSize(16);
  fill(100, 70, 40);
  text("Click the mouse to shake the tower!", width / 2, 560);
}

// --- 4. INTERACTIVITY ---
function mouseClicked() {
  // Toggle the fallen state
  hasFallen = !hasFallen;
}