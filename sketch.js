let blue = [];
let red = [];
let yellow = [];
var cnv;
let blueY = 200;
let blueX = 50;
let redY = 200;
let redX = 400;
let yellowX = 750;
let yellowY = 200;

function preload(){
  for (let i = 0; i < 2; i++) {
    blue[i] = loadImage("assets/blue"+i+".png");
    red[i] = loadImage("assets/red"+i+".png");
    yellow[i] = loadImage("assets/yellow"+i+".png");
  }
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(1100, 800);
  centerCanvas();
}

function draw() {
  background(245);
  if (dist(blueX,blueY,mouseX,mouseY)< 400){
    console.log("you are hovering over the blue star");
  }
  image(blue[0],blueX,blueY,300,300);
  image(red[0],redX,redY,300,300);
  image(yellow[0],yellowX,yellowY,300,300);
}