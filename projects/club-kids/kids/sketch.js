
//number of names to change
let num = 43;
let randomColor = 0;

function setup() {

  for (let i = 0; i < num+1; i++) {
    randomColor=color(random(255),random(255),random(255));
    
    //use the value of i to change the id (look at the HTML)
    select("#club"+i).style("color", randomColor);
  }

}
