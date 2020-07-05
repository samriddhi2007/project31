class Baseclass{
    constructor(x,y,width,height){
        var options = {
            friction : 0.5,
            density : 0.4,
            restitution : 0.7
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body)
    }
  display(){
      rectMode(CENTER)
     // var angle = this.body.angle
      push()
      translate(this.body.position.x,this.body.position.y)
       rotate(angle)
      strokeWeight(7)
      stroke("red")
      rect(0,0,this.width,this.height)
      pop()
  }
  }