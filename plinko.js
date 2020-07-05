class Plinko{
constructor(x,y,width,height){
    var options = {
        isStatic:true
    }
this.body = Bodies.circle(x,y,radius,options)
World.add(world,this.body)    
}
display(){
    ellipseMode(CENTER)
    ellipse(this.body.position.x,this.body.position.y,this.radius)
}

}