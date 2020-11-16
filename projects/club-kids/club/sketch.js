let bg = '#0B0B0D';
//let x = 400;
//let y = 400;

function setup() {
//  createCanvas(1500, 600);
    createCanvas(windowWidth, windowHeight);
    
function windowResized (){
    resiveCanvas(windowWidth, windowHeight);
}    
  background(bg);
  
}
  function draw() {
  rectMode(CENTER);



  // fill(0,255,0);
  // stroke(0,0,255);
  // strokeWeight(20);
  // rect(x,y,100,100,);
  // rect(x+200,y,100,100)
  // ellipse(150,150,100,100,);
  // line(0,0,800,800);
  // line(800,0,0,800,);
 
  
  fill(random(0,255),random(0,255),random(0,255), random(0,50));
  rect(random(width),random(height),100,100,);
  
}

