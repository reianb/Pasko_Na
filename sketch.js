let blue = [];
let red = [];
let yellow = [];
var cnv;
let blueY = 200;
let blueX = 300;

function preload(){
  for (let i = 0; i < 2; i++) {
    blue = loadImage("assets/blue"+i+".png");
    red = loadImage("assets/red"+i+".png");
    yellow = loadImage("assets/yellow"+i+".png");
  }
}

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(1000, 800);
  centerCanvas();
}

function draw() {
  background(245);
  if (dist(blueX,blueY,mouseX,mouseY)< 100/2){
    console.log("you are hovering over the star");
  }
  //image(blue[0],400,400,100,100);
}