const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld;
var obj1;

function setup(){
createCanvas(400,400);

myengine = Engine.create();
myworld = myengine.world;

obj1=Bodies.rectangle(200,200,50,50);
World.add(myworld,obj1);

console.log(obj1);
} 

function draw(){
Engine.update(myengine)  ;
background("yellow");
rect(obj1.position.x,obj1.position.y,50,50);
}