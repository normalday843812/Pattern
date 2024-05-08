let xPos;
let yPos;
let triangleLocation;

function setup() {
  createCanvas(800, 800);
  background(255);
  
}

function draw() {
  
  frameRate(0.5);

  makeLayeredTriangles(0,200,5)
  makeLayeredTriangles(0,0,5)

  

  makeLayeredLayeredTriangles(0, 0, 5);
}

function makeLayeredLayeredTriangles(x, y, repetition) {
  let heightUp = (((30 + (repetition - 1) * 50) * sqrt(3)) / 4) + ((30 * sqrt(3)) / 1.5) + 3;
  let length = 30 + (repetition - 1) * 50;

  let upperY = heightUp / 2;
  let lowerY = -heightUp;

  makeLayeredTriangles(length / 2 + 3, upperY, repetition);
  makeLayeredTriangles(-length / 2 - 3, upperY, repetition);
  makeLayeredTriangles(0, heightUp, repetition);

  makeLayeredTriangles(0, lowerY, repetition);

  makeLayeredTriangles(0, 0, repetition);
}


function makeLayeredTriangles(x, y, repetition) {
  for (let i = repetition - 1; i >= 0; i--) {
    makeTriangle(x, y, 30 + i * 50);
    print
  }
}

function makeTriangle(x, y, side) {
  xPos = width / 2 + x;
  yPos = height / 2 + y;
  let heightTriangle = (sqrt(3) / 2) * side;

  let vertex1 = createVector(xPos, yPos + 2 / 3 * heightTriangle);
  let vertex2 = createVector(xPos - side / 2, yPos - 1 / 3 * heightTriangle);
  let vertex3 = createVector(xPos + side / 2, yPos - 1 / 3 * heightTriangle);

  strokeWeight(5);

  triangle(vertex1.x, vertex1.y,
    vertex2.x, vertex2.y,
    vertex3.x, vertex3.y);

    strokeWeight(1);

  point(xPos,yPos)
}