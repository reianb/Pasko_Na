let blue = [];
let red = [];
let yellow = [];
var cnv;
let blueY = 350;
let blueX = 200;
let redY = 350;
let redX = 550;
let yellowX = 900;
let yellowY = 350;

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
  imageMode(CENTER);
}

function draw() {
  background(245);
  image(blue[0],blueX,blueY,300,300);
  image(red[0],redX,redY,300,300);
  image(yellow[0],yellowX,yellowY,300,300);

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
  