const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var canvas;


function preload(){
  
}

function setup(){
  canvas = createCanvas(1000,650);

  engine = Engine.create();
	world = engine.world;

  
 

}

function draw(){
  background("black");

  drawSprites();
}