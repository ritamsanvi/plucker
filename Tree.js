class Tree {
    constructor(x,y,radius) {
      var options = {
          isStatic: true,
          restitution:0,
          friction:0,
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.width=20
      this.height=20
      this.image= loadImage("tree.png")

      World.add(world, this.body);
    }
    display(){

      var pos =this.body.position;
      rectMode(CENTER);
      //fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
      imageMode(CENTER)
      image(this.image,pos.x+5,pos.y,445,440);
    
      }
    }
  