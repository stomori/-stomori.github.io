function setup() {
  createCanvas(windowWidth, windowHeight);
  // noLoop();
  frameRate(8);
}

function draw() {
  background('#049DD9');
  for(let i = 0; i < 10; i++){
  flower(random(width),random(height));
    
  }
}

function flower(x, y) {



  //red background petals
  fill('#E8425A');
  noStroke();
  ellipse(x, y + 15, 20, 33);
  ellipse(x + 15, y, 25, 20);
  ellipse(x, y - 15, 20, 33);
  ellipse(x - 15, y, 25, 20);


  //red petals
  fill('#A60B38');
  stroke('#F2A25C');
  strokeWeight(1.3);
  ellipse(x, y - 15, 5, 20);
  ellipse(x, y + 15, 5, 20);
  ellipse(x - 15, y, 15, 5);
  ellipse(x + 15, y, 15, 5);


  //dark blue lines
  angleMode(DEGREES);
  stroke('#021859');
  strokeWeight(2);
  line(x, y, x + 9, y + 9);
  line(x, y, x + 9, y - 9);
  line(x, y, x - 9, y + 9);
  line(x, y, x - 9, y - 9);

  //blue main bg
  fill('#0455BF');
  noStroke();
  ellipse(x, y, 20, 10);

  //center
  fill('#F2A25C');
  noStroke();
  ellipse(x, y, 10, 10);
}