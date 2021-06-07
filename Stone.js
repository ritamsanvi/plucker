class Stone {
    constructor(x, y, radius) {
        var options = {
            isStatic:false,
            'restitution':0.7,
            'friction': 0.5,
            'density':1,
        }
    this.body = Bodies.circle(x, y, radius , options);
    this.image = loadImage("stone.png")
    this.r=radius
    
    World.add(world, this.body);
  }

  fly(){
      this.stone.body= null;
  }
  display()
  {
    var pos =this.body.position;
    push();
   translate(pos.x, pos.y);
    strokeWeight(4);
    fill("white");
    imageMode(CENTER)
    image(this.image,0,0,105,105);
    pop();
  }
}
