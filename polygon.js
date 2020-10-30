class Polygon{

constructor(x,y){
var options={
    isStatic:false,
restitution:0.8,
density:1.0,
friction:0

}
this.body=Bodies.rectangle(x,y,40,40,options);
this.width=40;
this.height=40;
World.add(world,this.body);

}
display(){
fill("green");
var p= this.body.position;
rectMode(CENTER);
rect(p.x,p.y,this.width,this.height);


    
}






}