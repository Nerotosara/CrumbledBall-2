class paper{
constructor(x,y,r){
var papers={
restitution:0.3,
friction:0.5,
density:1.2,
isStatic:false

}
this.x=x;
this.y=y;
this.r=r;
this.image=loadImage("paper.png");
this.body=Bodies.circle(this.x,this.y,this.r/2,papers)
World.add(world,this.body);



}
display(){
var pos=this.body.position
push()
translate (pos.x,pos.y)
imageMode(CENTER);
fill ("blue")
image(this.image,0,0,this.r,this.r)
pop()

}



}