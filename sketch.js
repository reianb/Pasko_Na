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
  image(blue[0],blueX,blueY,300,300);
  image(red[0],redX,redY,300,300);
  image(yellow[0],yellowX,yellowY,300,300);
  ellipse(blueX, blueY, 300);
  ellipse(redX,redY,300);

  if (dist(blueX,blueY,mouseX,mouseY)< 300/2){
    image(blue[1],blueX,blueY,300,300);
  }
  if (dist(redX,redY,mouseX,mouseY)< 300/2){
    image(red[1],redX,redY,300,300);
  }

  if(dist(yellowX,yellowY,mouseX,mouseY)< 300/2){
    image(yellow[1],yellowX,yellowY,300,300);
  }

}
  