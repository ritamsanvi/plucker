class Mango {
    constructor(x,y,radius) {
      var options = {
          isStatic: true,
          restitution:0,
          friction:0,
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.width=20
      this.height=20
      this.r=radius
      this.image= loadImage("mango.png")

      World.add(world, this.body);
    }
    display(){

      var pos =this.body.position;
      imageMode(CENTER)
      image(this.image,pos.x+5,pos.y,45,40);
    
      }
    }
  
