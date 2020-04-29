//GLOBAL VARIABLES
//store the objects in variables
let c;
let cb;
let cc;
let cd;
let counter = 0;
let lCol = 0;



function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB,100);
  //store objects in variables C(xpos,ypos,diameter)
  c = new C(random(100,windowWidth-100), random(100,windowHeight-100), random(25,100));
  cb = new C(random(100,windowWidth-100), random(100,windowHeight-100), random(50,75));
  cc = new C(random(100,windowWidth-100), random(100,windowHeight-100), random(75,50));
  cd = new C(random(100,windowWidth-100), random(100,windowHeight-100), random(100,25));
  
  
   lCol = random(100);
  lCola = random(100);
  lColb = random(100);
  lColc = random(100);
  
  // noLoop();
}

function draw() {
  background(0);
  //call the functions of the object
  //draw background circle
  c.showCircle();
  c.drawCircle();
  
  //circle that moves
  cb.showCircle();
  cb.drawCircle();
  
  cc.showCircle();
  cc.drawCircle();
  
  
  cd.showCircle();
  cd.drawCircle();

  //line between them
  c.makeLine(cb);
  cb.makeLine(cc);
  cc.makeLine(cd);
  cd.makeLine(c);

}


//create an object
class C {

  constructor(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.acc = 0.01;
    this.angle = random(0, 360);
    this.xC = 0;
    this.yC = 0;
    this.sc=random(100);

  }

  //function to draw circle
  showCircle() {
    noFill();
    stroke(255);
    strokeWeight(2);
    push();
    translate(this.x, this.y);
    beginShape();
    for (let a = 0; a < TWO_PI; a += this.acc) {
      let r = this.radius;
      let x = r * cos(a);
      let y = r * sin(a);
      vertex(x, y);
    }
    endShape();
    pop();
  }

  //function to draw moving circle
  drawCircle(x, y) {
    fill(255);
    push();
    translate(this.x, this.y);
    this.xC = this.radius * cos(this.angle);
    this.yC = this.radius * sin(this.angle);
    ellipse(this.xC, this.yC, 10);
    pop();
    this.angle = this.angle + this.acc;
  }

  makeLine(other) {
    //display
    stroke(this.sc,100,100);
    noFill();
    strokeWeight(2);
    
    //draw line
    push();
    translate(this.x, this.y);
    beginShape();
    vertex(this.xC,this.yC);
    vertex(other.xC+(other.x-this.x), other.yC+(other.y-this.y));
    endShape(CLOSE);
    pop();
  }

}