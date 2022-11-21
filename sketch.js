let blueOff;
let blueOn;

function setup() {
  createCanvas(800, 800);
  blueOff = createImg("assets/blueOff.png");
  blueOff.position(-30,-25);
  
  blueOff.mouseOver(turnOn);
  }

function turnOn () {
  blueOff.hide();
}