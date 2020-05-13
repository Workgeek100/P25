const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var rainDrops=[];


function setup() {
  var canvas = createCanvas(800,400);

  for (var i = 0; i < 500; i++) {
    rainDrops[i] = new Raindrops();
  }
  
}

function draw() {
  background(200);  
  
  for (var i = 0; i < rainDrops.length; i++) {
    rainDrops[i].fall();
    rainDrops[i].display();
  }
}