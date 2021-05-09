class Polygon{

    constructor(){
        var options={
            //isStatic : true
            density:1,
            restitution:0.5
          }
        
          this.body = Bodies.circle(60,100,10,options)

          this.image=loadImage("polygon.png");
          World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        noStroke();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(188,67,67);
        imageMode(CENTER);
        image(this.image,0,0, 40,  40);
        pop();
    }
}