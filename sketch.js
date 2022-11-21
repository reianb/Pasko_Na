let blueOff;
let blueOn

function setup() {
  createCanvas(800, 800);
}

/**function preload(){
  for(let i = 0; i<2; i++){
    red[i] = loadImage("assets/red"+[i]+".png");
  }
}**/

function draw() {
  background(125);
  blueOff = createImg("assets/blueOff.png");
  blueOff.position(-30,-25);
  
  blueOff.mouseOver(turnOn);
  }

function turnOn () {
  blueOff.hide();
}