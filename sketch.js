let red = [];

function setup() {
  createCanvas(400, 400);
}

function preload(){
  for(let i = 0; i<2; i++){
    red[i] = loadImage("assets/red"+[i]+".png");
  }
}

function draw() {
  background(125);
  image(red[0], 0, 0);

}

function hoverStar(){
  
}