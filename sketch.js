// ============================================================
// Week 1 Amy Liu: Images and Shapes (Jenga Poster)
// ============================================================

let img;

function preload() {
  img = loadImage("assets/images/jenga.jpg");
}

function setup() {
  createCanvas(800, 600);
}

function draw() {
  // A white background color
  background(255, 255, 255); 

  // --- 1. THE IMAGE ---
  // Positioned as a centered "header" or poster
  imageMode(CENTER);
  image(img, width / 2, 150, 200, 200);

  // --- 2. THE SHAPES (Jenga Stack) ---
  // Drawing stacked rectangles to look like a tower
  rectMode(CENTER);
  stroke(80, 50, 20);
  strokeWeight(3);
  
  // Layer 1 (Bottom)
  fill(180, 140, 100);
  rect(width / 2, 450, 180, 40);
  
  // Layer 2 (Middle - Offset slightly for "tension")
  fill(200, 160, 120);
  rect(width / 2 + 10, 410, 180, 40);
  
  // Layer 3 (Top)
  fill(222, 184, 135);
  rect(width / 2 - 5, 370, 180, 40);

  // --- 3. THE TEXT ---
  textAlign(CENTER);
  noStroke();
  
  // Main Title
  fill(60, 40, 20);
  textSize(42);
  textStyle(BOLD);
  text("JENGA", width / 2, 310);
  
  // Subtext
  fill(16);
  textSize(24);
  textStyle(NORMAL);
  text("Don't let it fall!", width / 2, 530);
  
  // Group requirement text
  textSize(16);
  fill(100, 70, 40);
  text("Best played in a group of 4!", width / 2, 560);
}